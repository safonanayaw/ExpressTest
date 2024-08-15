const express = require('express')
//
const app = express()

//Call mock data i server.js
const data = require('./data/mock.json')

//GET with id param to search and send id param to client.
//logging middleware
app.use((req, res, next) => {
    console.log(`the request method is ${req.method} and url is ${req.url}`);
    next(); //pass control to next middleware
})
app.get('/class/:id', (req, res, next) => {
    const studentId = Number(req.params.id);    const students = data.filter((student) => { return student.id === studentId});
    res.send(students);

})

//GET with next param
app.get('/next', (req, res, next) => {
    res.send('the response will be sent to the next call fxn');
    next()
},

(req, res) => {
    res.send('helo this is a second call back to the route');
})

// port listening
app.listen(3000)