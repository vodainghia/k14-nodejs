class MethodOverloading {

    static add(a, b) {
        return a + b;
    }

    static add(a, b, c) {
        return a + b + c;
    }

    // Rest parameters
    static add(...nums) {
        return nums.reduce((acc, num) => acc += num);
    }

    static divide(a, b) {
        if (arguments.length != 2) {
            throw new Error('Must provide 2 numbers!');
        }
        if (b == 0) {
            throw new Error("Can't devide by zero");
        }
        return a / b;
    }

}

// JS is NOT having Overloading, it will utilize the latest declaration add(a, b, c) instead of add(a, b)

const addResult = MethodOverloading.add(2, 3);
console.log(addResult); // NaN if not using rest param

// but we can overloading by using rest parameter

module.exports = MethodOverloading;