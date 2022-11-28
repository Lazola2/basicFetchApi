fetch('../data/data.json') // request to the server
.then( res => {
    return res.json();
})
.then( data => {
    console.table(data.results)
})
.catch( e => {
    console.log(e);
});