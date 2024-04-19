//INTRODUCTION OF EXPRESS JS AND SOME BASICS ABOUT ROUTING 

const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Namaste World From Ayush')
})
app.get('/about', (req, res) => {
    res.send('About')
  })
app.get('/blog', (req, res) => {
    res.send('Blogs')
  })
app.get('/blog/:slug', (req, res) => {
  //logic to fetch {slug} from the db
    res.send(`This is ${req.params.slug}`)
}) 

/*app.get('/blog/:slug', (req, res) => {
  // FOR URL:http://localhost:3000/blog/ExpressJs?mode=dark&region=in
  
  console.log(req.params); // will output {slug : 'ExpressJs}
  console.log(req.query); //will output {mode:'dark',region:'in'}
  res.send(`This is ${req.params.slug}`)
})  


/*app.get('/blog/:slug/:second', (req, res) => {
  res.send(`This is ${req.params.slug} and ${req.params.second}`)
}) */  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})