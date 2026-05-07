// 🌍 Global Scope
const restaurantName = "Flatburger Restaurant";
const burgers = ["Cheese Burger", "Chicken Burger", "Veggie Burger"];
const milkshakes = ["Vanilla Shake", "Chocolate Shake", "Strawberry Shake"];

// Function to display full menu (Function Scope)
function showMenu() {
  let output = `Welcome to ${restaurantName}!\n\n`;

  output += "🍔 Burgers:\n";
  burgers.forEach(function (b) { output += " - " + b + "\n"; });

  output += "\n🥤 Milkshakes:\n";
  milkshakes.forEach(function (m) { output += " - " + m + "\n"; });

  document.getElementById("output").textContent = output;
}

// Function to handle ordering (Function Scope)
function orderItem(item) {
  let result = "";

  // Block Scope
  if (burgers.includes(item)) {
    let type = "Burger";
    result = `You ordered: ${item} — Type: ${type}`;
  } else if (milkshakes.includes(item)) {
    let type = "Milkshake";
    result = `You ordered: ${item} — Type: ${type}`;
  } else {
    result = "Item not on the menu";
  }

  document.getElementById("output").textContent = result;
}

// Prompt user to type order
function orderPrompt() {
  const item = prompt("Enter item name to order:");
  if (item) orderItem(item.trim());
}