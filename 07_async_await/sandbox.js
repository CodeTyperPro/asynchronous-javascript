// async & await

const url = 'https://jsonplaceholder.typicode.com/todos/';
const getTodos = async () => {
    const response = await fetch(url + "1");
    const data = await response.json();
    return data;
};

console.log(1);
console.log(2);

getTodos()
    .then(data => console.log('resolved: ', data));

console.log(3);
console.log(4);


// NOTE: Asynchronous function always returns a promise

/*const url = 'https://jsonplaceholder.typicode.com/todos/ ';
fetch(url).then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((error) => {
    console.log('rejected', error);
});*/