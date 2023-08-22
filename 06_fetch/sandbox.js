// fetch api

const url = 'https://jsonplaceholder.typicode.com/todos/ ';
fetch(url).then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((error) => {
    console.log('rejected', error);
});