

const getTodo = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);

        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            // console.log(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4){
            // console.log("Couldn't fetch the data.");
            callback("Couldn't fetch the data.", undefined);
        }
    })

    // const url = './todos.json';
    request.open('GET', resource);
    request.send();    
}

console.log(1);
console.log(2);

const url = 'https://jsonplaceholder.typicode.com/todos/';

getTodo(url, (error, data) => {
    console.log("Callback 1 was fired.");
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }

    getTodo(url + "1", (error, data) => {
        console.log("Callback 2 was fired.");
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }

        getTodo(url + "2", (error, data) => {
            console.log("Callback 3 was fired.");
            if (error) {
                console.log(error);
            } else {
                console.log(data);
            }
        });
    });
});

console.log(3);
console.log(4);

/*getTodo();
getTodo();
getTodo();*/