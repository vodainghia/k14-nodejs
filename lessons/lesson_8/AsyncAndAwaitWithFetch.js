// Usage
(async function run() {
    const targetUrl = 'https://jsonplaceholder.typicode.com/todos/1';
    const response = await fetch(targetUrl);
    const jsonResult = await response.json();
    console.log(jsonResult);    
})();