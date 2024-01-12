// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
var groceryList = document.getElementById("groceries");

// ADD NEW ITEM TO END OF LIST
// Create element
const newListItem = document.createElement("li");

// Create text node
const listItemContent = document.createTextNode("Ground Beef");

// Add text node to element
newListItem.appendChild(listItemContent);

// Add element end of list
groceryList.appendChild(newListItem);


// ADD NEW ITEM START OF LIST
// Create element
const anotherListItem = document.createElement("li");

// Create text node
const newItemContent = document.createTextNode("Pasta");

// Add text node to element
anotherListItem.prepend(newItemContent);

// Add element to list
groceryList.prepend(anotherListItem);


// All <li> elements
var listItems = groceryList.getElementsByTagName("li");

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
// Loop through elements
// Change class to cool


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
var listHeadingElement = document.getElementById("listHeading");

// h2 text
var listHeadingText = listHeadingElement.innerHTML;

// No. of <li> elements
var numberOfItems = document.getElementById("groceries").getElementsByTagName("li").length;

// Content
var content = listHeadingText + " (" + numberOfItems + " items)";

// Update h2 using innerHTML (not textContent) because it contains markup
listHeadingElement.innerHTML = content;
