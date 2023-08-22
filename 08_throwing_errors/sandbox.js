// async & await

const url = 'https://jsonplaceholder.typicode.com/todos/';
const getTodos = async () => {
    const response = await fetch(url + "1");

    if (response.status  !== 200) {
        throw new Error('Can not fetch the data.');
    }

    const data = await response.json();
    return data;
};

getTodos()
    .then(data => console.log('resolved: ', data))
    .catch(error => console.log('rejected: ', error.message));