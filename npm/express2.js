//CONCEPTS OF SERVING HTML AND JSON DATA 

const express =require('express')
const app=express()
const port=80


//Serving HTML data as response
app.get('/',(req,res)=>{
    res.send("<h1>This is serving html data to client as response")
})

//Serving json data as response to client
app.get('/json',(req,res)=>{
    res.json([
    {
        id:1,
        name:"Ayush Saxena"
    },
    {
        id:2,
        name:"Software Developer"
    }
  ])
})
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})