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