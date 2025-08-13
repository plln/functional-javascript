"use strict";

const orders = [
    { amount: 250, currency: 'USD' },
    { amount: 100, currency: 'EUR' },
    { amount: 300, currency: 'USD' },
    { amount: 150, currency: 'EUR' },
    { amount: 200, currency: 'USD' },
    { amount: 50, currency: 'EUR' }
];

let totalAmount_0 = 0;
for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    totalAmount_0 += order.amount;
}
console.log('Total amount(for loop):', totalAmount_0);

const calcTotalAmount = (total, order) => {
    //console.log(total, order.amount);
    return total += order.amount;
};
const totalAmount_1 = orders.reduce(calcTotalAmount, 0);
console.log('Total amount(reduce):', totalAmount_1);

