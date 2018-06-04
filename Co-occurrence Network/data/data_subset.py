"""This script will read all the characters appearing in the file "main_refined.json"
and create a subset of from the file "main.json", called "main_final.json" which 
contains renormalized indices and group names
"""

import json
file = open("main.json")
data = json.load(file)

load_char_file = json.load(open("main_refined.json"))
retained_chars = [node["name"] for node in load_char_file["nodes"]]


indices_to_remove = []
nodes_to_remove = []
edges_to_remove = []

for i, node in enumerate(data["nodes"]):
    node["index"] = i

# remembering which nodes to remove
for i, node in enumerate(data["nodes"]):
    if node["name"] not in retained_chars:
        indices_to_remove.append(i)
        nodes_to_remove.append(node)

# remembering which edges to remove
for i, edge in enumerate(data["edges"]):
    if edge["source"] in indices_to_remove or edge["target"] in indices_to_remove:
        edges_to_remove.append(edge)

# removing the nodes
for node in nodes_to_remove:
    data["nodes"].remove(node)

# removing the edges
for edge in edges_to_remove:
    data["edges"].remove(edge)

# renormalizing the indices
new_indices = {}
for i, node in enumerate(data["nodes"]):
    new_indices[node["index"]] = i
    node["index"] = i

for edge in data["edges"]:
    edge["source"] = new_indices[edge["source"]]
    edge["target"] = new_indices[edge["target"]]

json.dump(data, open("main_final.json", "w"), indent = 1)