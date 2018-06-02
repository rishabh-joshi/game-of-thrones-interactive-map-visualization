ToDo:
--- finished now ---
1. figure out how to deal with updates to visualization functions (like curves) that are now within the big visualization rebuild function....
2. Make rebuild button pretty
3. make sure options drop-down remains centered at different screen sizes.
4. see if easy to filter on one item in one dimension before visualizing to lessen the clutter?



--------------------------------------------
--- finished now ---
right-drop-down for single item (of a certain dimension) filter:
1. figure out how to add extend to right drop-downs
2. figure out how to get a list of unique values for each dimension across all rows
3. get each list of unique values next to each dimension name
4. When user clicks on item of unique dimension values, it gets added to limitations object with dimension name and value name as strings.
5. update limitations object with selected items:

---------------------------------------------------

Problem Behavior now:
	1. when I click at item level, a click registers at dimension level
	2. clicks at dimension level don't register at item level, both in terms of color and in terms of what is included if not all levels. 
	3. When rebuilding, the list of highlighted dimension items does not reflect any clicks on dimension items but only dimensions 100% on or off. 
	4. When rebuilding, limitations list only reflectcts clicks and not the original dimensions. This means dimensions that on load were 100% populated on load.. but only have one click off... will actually treat that one click off as a click on. ... or does it not accept clicks off?
	5. nothing built in to take an element off of limitation list if it exists!!!!

Needed Behavior: 
	1. Clicks on dimension level.. should...
x		a. turn on/off that dimension from the dimension list
x			a1. the dimension is in / not in var = selected_options
x			a2. the style changes appropriately
		b. turn off/on all items under that dimension
 			b1. this means, when clicked off, limitations[dimension name] = [], and the dimension is not in var = selected_options
x			b3. style changes appropriately for all dimension items..
	2. Clicks on item level.. should ...
		a. not be reflected in parent (dimension) level unless 
			a1. the click turns on a single item and the parent was previously turned off
				a1b. then parent (dimension) should change to on
			a2. parent level was turned on, the click turns off the last item.. then the parent should turn off..

			- this behavior could be done via...  
				an additional function that runs at the end of the click function... and the limitation object for the parent exists... if it doesn't...... adjusts the dimension CSS
				- if a new first item is add to the limitation folder... change parent CSS


	3. On page load, there should be a function that:
		a. takes the chosen selected dimensions at start and populates the limitations object such that all items are included for those selected dimensions.
	4. The function that populates the limitations object, should take items off if they already exist. 
	5. On "rebuilt" button pressed, there shouldn't be a reset of classes!!! but they should reflect what was popluated.
	6. when someone clicks to turn a dimenson off.. all limitation items should also turn off!



on load... dimensions in selected dimensions list populate the limitations object with all items for each dimension in that selected array

when an new item is clicked... the item is added to that limitation array object

when an item is clicked that is already in limitations, that item is taken out.. of list.








- there should be a function that gets all the unique values for each dimension in the selected dimensions
   and returns them in the same structure of limitations... 
    .... and this should only run on page load.. and then never again?











