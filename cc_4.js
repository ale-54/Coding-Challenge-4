//Task 1: If Statements
let purchaseAmount = 800;
let finalAmount = purchaseAmount; //letting the purchase amount equal the finalized one
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * .85;
    console.log(`Discount Applied to Purchase`);
}; //applied a 15% discount to purchases over $100
console.log(`Final Amount after Discount: $${finalAmount}`); //680 in this example

//Task 2: For Loop
let sales = [60, 100, 200, 140, 43]; //sales figures
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}; //calculating total sales (all 5 listed)
console.log(`Sales Total: $${totalSales}`); //the display for total sales

//Task 3: While Loop
let stock = 10;
while (stock >= 0) {
    console.log(`Stock Number: ${stock}`);
    stock --;
}; //the stock will decrease by 1 until it reaches the value zero (0)

//Task 4: Do...While Loop
let responses = 0;
do {
    console.log(`Collecting Responses: ${responses}`);
    responses ++;
} while (responses <= 3); //collecting until it reaches three (3) responses

//Task 5: For...In Loop
let employee = {
    name: "Alice", position: "Manager", salary: 75000
}; //employee Alice information (name, position, and salary) as given in the assignment
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`); 
}; //displaying employee information

//Task 6: For...Of Loop
let products = [`Karate Kid DVD`, `Jesus Candle`, `Magic: The Gathering Cards`]; //an array of at least 3 products
for (let product of products) {
    console.log(`Product: ${product}`);
}; //displaying the products
