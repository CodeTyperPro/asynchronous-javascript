

const getTodo = (resource, callback) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4){
                reject('error getting resource')
            }
        })

        request.open('GET', resource);
        request.send();         
    })
}

const url = 'https://jsonplaceholder.typicode.com/todos/';

getTodo(url).then( data => {
    console.log('promise 1 resolved: ', data);
    return getTodo(url + "1");
}).then(data => {
    console.log('promise 2 resolved: ', data);
    return getTodo(url + "2");
}).then(data => {
    console.log('promise 3 resolved: ', data);
}).catch(error => {
    console.log('promise rejected:', error);
})