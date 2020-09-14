//1. ??????

//2. 

function createBase(num){
    const base = num;

    return function (num2) {
        return base + num2;
    }
}

var addSix = createBase(6)
console.log(addSix(10), // returns 16
            addSix(21)); // returns 27

//3. Functional programming excels with data that doesn't often change, and it's easier to add ways to manipulate that data since data and manipulation are separate concerns. OOP makes it a lot easier to change data due to the combination of small pieces of data with methods that act on them, but to add ways to manipulate that data becomes a little more challenging when you have to update several classes to reflect changes. In addition, data can be easily protected and secured with OOP, but functional programming doesn't have a way to "hide" data from prying eyes, making it much less secure from malicious intent.