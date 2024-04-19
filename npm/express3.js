//SERVING STATIC FILES SUCH AS HTML,CSS,JS,AND EVEN TEXT FILES ETC AS RESPONSE TO CLIENT

const express=require('express')
const app=express();
const path=require('path')
const port=8000;

console.log(__dirname)
const staticpath=path.join(__dirname,"/public")
console.log(staticpath)

//built-in middleware
app.use(express.static(staticpath));

app.listen(port,()=>{
    console.log(`App is listening on ${port}`);
})

