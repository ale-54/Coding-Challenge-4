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

