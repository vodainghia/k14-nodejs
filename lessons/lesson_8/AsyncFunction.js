function askQuestion(question) {
    console.log(this.name + question);
}

// Simulate the async
console.log('1. Toi nha thang Teo.');
const question = ' 2. (name) oi, di uong cafe khong?';
setTimeout(askQuestion.bind({name: 'Teo'}, question), 3000);

console.log('3. Chay toi quan cafe.');


/**
 * Asynchronous: Vi du Moi uong cafe
 * Asynchronous: callback -> callback hell problem (AsyncAndCallBack.js, AsyncAndCallBack_fetch.js)
 * Asynchronous: Promise -> Thenable (PromiseSimulation.js)
 * Asynchronous: Promise -> async/await -> clean syntax + easy to maintain (PromiseAsyncAwait.js)
 */