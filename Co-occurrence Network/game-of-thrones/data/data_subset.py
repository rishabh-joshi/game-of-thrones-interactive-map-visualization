import json
file = open("matrixObject-main.json")
data = json.load(file)

retained_chars = ["Arya Stark", "Bran Stark", "Daenerys Targaryen", "Joffrey Baratheon"]

load_char_file = json.load(open("matrixObject-main - Copy.json"))
retained_chars = [node["name"] for node in load_char_file["nodes"]]


indices_to_remove = []
nodes_to_remove = []
links_to_remove = []

for i, node in enumerate(data["nodes"]):
    node["index"] = i

# remembering which nodes to remove
for i, node in enumerate(data["nodes"]):
    if node["name"] not in retained_chars:
        indices_to_remove.append(i)
        nodes_to_remove.append(node)

# remembering which links to remove
for i, link in enumerate(data["links"]):
    if link["source"] in indices_to_remove or link["target"] in indices_to_remove:
        links_to_remove.append(link)

# removing the nodes
for node in nodes_to_remove:
    data["nodes"].remove(node)

# removing the links
for link in links_to_remove:
    data["links"].remove(link)

# renormalizing the indices
new_indices = {}
for i, node in enumerate(data["nodes"]):
    new_indices[node["index"]] = i
    node["index"] = i

for link in data["links"]:
    link["source"] = new_indices[link["source"]]
    link["target"] = new_indices[link["target"]]

json.dump(data, open("new_data.json", "w"), indent = 1)