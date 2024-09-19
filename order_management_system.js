// Task 1: Inventory Array of Product Objects

const inventory = [
    { name: 'Espresso', price: 3, quantity: 10 },
    { name: 'Latte', price: 4, quantity: 7 },
    { name: 'Cappuccino', price: 4, quantity: 8 },
    { name: 'Mocha', price: 5, quantity: 5 }
]; //initializing inventory array

// Task 2: Orders Array of Order Objects
let orders = []; //initailize empty orders array

// Task 3: Function to Place an Order
function placeOrder(customerName, orderedItems){
    let product = inventory.find(item => item.name === orderedItems); // using the find method to find the item
    
    if (product){
        inventory.quantity -= orderedItems; // calculating the inventory available after sale
        console.log(`Thank yoy for your order ${customerName}!`); 
    } else {
        console.log(`Error: ${orderedItems} is not in the inventory.`); //prints error if item not found 
    };

};

orders.push({
    customerName: customerName,
    items: orderedItems,
    status: "Pending"
  });   // Add an order to the orders array with status 'Pending'
    