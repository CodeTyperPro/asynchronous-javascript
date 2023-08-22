const getTodo = (resource, callback) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);

            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                // console.log(request.responseText);
                // callback(undefined, data);
                resolve(data);
            } else if (request.readyState === 4){
                // console.log("Couldn't fetch the data.");
                // callback("Couldn't fetch the data.", undefined);
                reject('error getting resource')
            }
        })

        // const url = './todos.json';
        request.open('GET', resource);
        request.send();         
    })
}

const url = 'https://jsonplaceholder.typicode.com/todoss/';

getTodo(url).then( data => {
    console.log('promise resolved: ', data);
}).catch(error => {
    console.log('promise rejected:', error);
})

// === Promise example
/*const getSomething = () => {
    return new Promise((resolve, reject) => {
        // fetch something
        // resolve('some data');
        reject('some error');
    });
};

getSomething().then((data) => {
    console.log(data);
}, (error) => {
    console.log(error);
});

getSomething().then((data) => {
    console.log(data);
}).catch(error => {
    console.log(error);
});*/