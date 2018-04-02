const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';

//To make a axios get request. Every request needs a promise (.then)

axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp =>{
    console.log('RESPONSE: ', resp)
}).catch (err => {
    console.log('There was an error: ', err.message);
});


const newItem = {
    title: 'Harrison\'s new item - Amazing!',
    details: 'Some details go here'
};

//To send data to a database, axios.post

// axios.post(`${BASE_URL}/todos${API_KEY}`, newItem).then(resp => {
//     console.log('Add Response: ', resp)
// })

const itemID = '5ac288b4329150131fbbff75';

//http://api.reactprototypes.com/todos/5ac288b4329150131fbbff75?key=testuser1234


axios.get(`${BASE_URL}/todos/${itemID}${API_KEY}`).then(resp => {
    console.log('RESPONSE TEST: ', resp)
})