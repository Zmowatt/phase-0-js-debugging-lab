
debugger
function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger
    for (let i = 0; i < quantity; i++) {
        totalPrice += pricePerItem;
    }
    debugger
    if (quantity >= 10) {
        totalPrice *= 0.9;
    }
debugger
    return totalPrice;
}


module.exports = calculateDiscountedPrice;