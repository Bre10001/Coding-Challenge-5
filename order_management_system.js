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
  customerName: "Alice ",  // Name of the customer
  items: [                        // Array of products ordered
    { name: "Espresso", quantity: 2 },
    { name: "Latte", quantity: 1 }
  ],
  status: "Pending"               // The status of the order
});

console.log(`Order placed successfully for ${orders[orders.length - 1].customerName}.`);

// Task 4: Function to Calculate Total for an Order

function calculateOrderTotal(order) { // accepts an order object and calculates the total amount by summing up the prices of all ordered items.
    let total = 0;
    order.items.forEach(item => {
        const product = inventory.find(p => p.name === item.name); // Find product in inventory
        if (product) {
            total += product.price * item.quantity; // Add price of product multiplied by quantity to the total
        }
    });
    return total; // Returns the total price for the order
}

// Example
const order = orders[0]; // first order
console.log(`Total for ${order.customerName}'s order: $${calculateOrderTotal(order)}`);

// Task 5: Mark an Order as Completed

function completeOrder(customerName) {  // takes a customer's name and updates their order status to 'Completed'.
    const order = orders.find(ord => ord.customerName === customerName); // Find the customer's order by name
    
    if (order) {
        order.status = 'Completed'; // Change the order status to 'Completed'
        console.log(`Order for ${customerName} has been marked as completed.`);
    } else {
        console.log(`Error: No order found for ${customerName}.`); // Error if no matching order is found
    }
}

// Example usage of completeOrder function:
completeOrder('Alice');
completeOrder('Bob'); // Error due to no order for Jane