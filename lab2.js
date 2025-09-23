// COMP 3123 – lab2

// question1
const numbers = [1, 2, 3, 4];
const double = (arr) => {
    for (const n of arr) {
        console.log(`Value: ${n * 2}`);
    }
};
double(numbers);

// question2
const capitalize = (str = "") => {
    if (!str) return "";
    const [first = "", ...rest] = [...str];
    return `${first.toUpperCase()}${rest.join("")}`;
};
console.log(capitalize("fooBar")); // Sofiia
console.log(capitalize("nodeJs"));

// question3
const capitalizeColors = (colors = []) =>
    colors.map((c) => capitalize(c));
console.log(capitalizeColors(["red", "green", "blue"]));

// question4
const filterUnder20 = (arr = []) => arr.filter((v) => v >= 20);
console.log(filterUnder20([3, 19, 20, 21, 50]));

// question5
const sumAndProduct = (arr = []) => ({
    sum: arr.reduce((acc, v) => acc + v, 0),
    product: arr.reduce((acc, v) => acc * v, 1),
});
console.log(sumAndProduct([1, 2, 3, 4]));

// question6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    info() {
        return `${this.year} ${this.model}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance = 0) {
        super(model, year);
        this.balance = balance;
    }
    makePayment(amount = 0) {
        this.balance = Math.max(0, this.balance - amount);
        return this.balance;
    }
    info() {
        return `${super.info()} | Balance: $${this.balance}`;
    }
}

const camry = new Sedan("Toyota Camry", 2019, 14000);
console.log(camry.info());
console.log(camry.makePayment(5000));
console.log(camry.info());
