//SERVING DYNAMIC CONTENT ON THE WEB PAGE USING TEMPLATE ENGINE IN EXPRESS
//HERE WE ARE USING hbs VIEW ENGINE, WE CAN ALSO USE OTHER TEMPLATE ENGINES SUCH AS PUG,EJS ETC

const express=require('express')
const app=express();
const port=8000;

//set the view engine 
app.set("view engine","hbs");

app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(port,()=>{
    console.log(`listening to the ${port}`);
})
  