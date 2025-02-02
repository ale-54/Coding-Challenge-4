//Task 1: If Statements
let purchaseAmount = 800;
let finalAmount = purchaseAmount; //letting the purchase amount equal the finalized one
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * .85;
    console.log(`Discount Applied to Purchase`);
}; //applied a 15% discount to purchases over $100
console.log(`Final Amount after Discount: $${finalAmount}`); //680 in this example
