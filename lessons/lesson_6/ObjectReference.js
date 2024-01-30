let teo = {
    name: 'Teo',
    myAge: 18,
};

let ti = teo; // they're pointing to only one memory address
ti.name = 'Ti';
ti.myAge = 19;

console.log(teo); // { name: 'Ti', myAge: 19 }
console.log(ti); // { name: 'Ti', myAge: 19 }

let arr = [teo, teo]; // they're pointing to only one memory address
arr[1].name = 'Tun';

console.log(arr); // [ { name: 'Tun', myAge: 19 }, { name: 'Tun', myAge: 19 } ]


// SHALLOW COPY: (shallow = nhẹ) Spread syntax => only one level
let teo2 = {
    name: 'Teo2',
    myAge: 11,
    bankAccount: {
        accountNum: 'Num0123',
        balance: 10000000,
    }
};
let ti2 = { ...teo2 };
ti2.name = 'Ti2';
ti2.bankAccount.balance = 22;

console.log(teo2); // balance: 1 by affected from ti2.bankAccount.balance = 1;
console.log(ti2);

// Shallow copy - Handle for nested object, array... (NOT for function, circular re)
let ti3 = JSON.parse(JSON.stringify(teo2));
ti3.name = 'Ti3';
ti3.bankAccount.balance = 333;

console.log(teo2); // prior value
console.log(ti3); // 333


// Object.keys(targetObject)
console.log('\nArr of keys: ', Object.keys(teo2));

// Object.values(targetObject)
console.log('\nArr of values: ', Object.values(teo2));

// Object.entries(targetObject)
console.log('\nMap of [key, value]: ', Object.entries(teo2));