"use strict";

fetch("data.txt")
    .then(response => response.text())
    .then(text => {
        processFileContents(text);
    })
    .catch(error => console.error('Error occurred', error));

function processFileContents(fileContents) {
    const lines = fileContents
        .trim()
        .split('\n');
    console.log('line items (string)', lines);

    const lineItems = lines
        .map(line => line.split('\t'))
        .reduce(function (array, line) {
            array.push({
                name: line[0],
                item: line[1],
                price: line[2],
                quantity: line[3]
            });
            return array;
        }, []);
    console.log('line items (objects)', JSON.stringify(lineItems));

    const groupBy = lineItems
        .reduce(function (result, lineItem) {
            const key = lineItem.name;
            result[key] = result[key] || [];
            result[key].push({
                item: lineItem.item,
                price: lineItem.price,
                quantity: lineItem.quantity
            });
            return result;
        }, {});
    console.log('group by customers', JSON.stringify(groupBy));
}
