

const getTodo = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);

        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.responseText);
            callback(undefined, request.responseText);
        } else if (request.readyState === 4){
            // console.log("Couldn't fetch the data.");
            callback("Couldn't fetch the data.", undefined);
        }
    })

    const url = 'https://jsonplaceholder.typicode.com/todos/';
    request.open('GET', url);
    request.send();    
}

console.log(1);
console.log(2);

getTodo((error, data) => {
    console.log("Callback was fired.");
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);