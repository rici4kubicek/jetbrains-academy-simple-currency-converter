console.log('Welcome to Currency Converter!');
console.log('1 USD equals 1 USD');
console.log('1 USD equals 113.5 JPY');
console.log('1 USD equals 0.89 EUR');
console.log('1 USD equals 74.36 RUB');
console.log('1 USD equals 0.75 GBP');
console.log('What do you want to convert?');
const possibleCurrencies = ['USD', 'JPY', 'EUR', 'RUB', 'GBP'];
const usdValues = [1, 113.5, 0.89, 74.36, 0.75];

const input = require('sync-input');
let fromCurrencyInput = input("From: ");
let fromCurrency = -1;
for (c in possibleCurrencies) {
    if (possibleCurrencies[c] == fromCurrencyInput.toUpperCase())
        fromCurrency = c;
}

if (fromCurrency == -1) {
    console.log('Unknown currency');
} else {
    let currency = input("To: ");

    let targetCurrency = -1;
    for (c in possibleCurrencies) {
        if (possibleCurrencies[c] == currency.toUpperCase())
            targetCurrency = c;
    }

    if (targetCurrency == -1) {
        console.log('Unknown currency');
    } else {
        let amount = Number(input("Amount: "));
        if (amount >= 1) {
            let valueUSD = amount / usdValues[fromCurrency];
            let value = usdValues[targetCurrency] * valueUSD;
            console.log('Result: ' + amount + ' ' + possibleCurrencies[fromCurrency] + ' equals ' + value.toFixed(4) + ' ' + possibleCurrencies[targetCurrency]);
        } else if (amount < 1) {
            console.log('The amount cannot be less than 1');
        } else
            console.log('The amount has to be a number');
    }
}