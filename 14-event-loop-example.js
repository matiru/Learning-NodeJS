
//started operating system process

// console.log('first')

// setTimeout(()=>{
//     console.log('second')
// },0) // asynchronous 

// console.log('third')


// synchronous
// console.log('first')
// setInterval(()=>{
//     console.log('second')
// },2000)

// console.log('third')


const http = require('http')

const server = http.createServer((req,res) =>{
    console.log('request event')
    res.end('Hello World')
}) 

server.listen(5000, ()=>{
    console.log('server listening on port :5000..')
})