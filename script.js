//your JS code here. If required.
// Get the target element
const target = document.getElementById("level");

// Initialize level count
let level = 0;
let current = target;

// Traverse up the DOM tree until no parent remains
while (current) {
  level++;
  current = current.parentElement;
}

// Display the result
alert("The level of the element is: " + level);
