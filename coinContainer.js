var index;
var a = ["a", "b", "c", "etc."]; //Get all arrays from sheets
for (index = 0; index < a.length; ++index) {
	var gridItem = document.createElement("GRID-ITEM")
	gridItem.innerHTML = a[index];
	document.body.appendChild(gridItem);
	// Create Grid item
	// Create icon, "name from array" + .png
	// Create name, "name from array"
	// Create 24 shape, id="name from array"
	// Create Dst shape, id="name from array"
	// Get value of 24 from sheets
	// Get value of Dst from sheets
	// Change color based on 24
	// Change color based on Dst

    console.log(a[index]);

}