const express=require('express')
const app=express();
const port=8000;
const path=require('path')

//set the view engine 
//By default we have to name the folder of those files which we can want to serve using template engine as "views"
app.set("view engine","hbs");

//But we can also change the folder name from view but we'll have to manually set the folder name to the desired name along with simply renaming the "views" in file directory
//Example is given below
/*const templatepath=path.join(__dirname,"/templates")
app.set("views",templatepath)*/
console.log(__dirname);

app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(port,()=>{
    console.log(`listening to the ${port}`);
})

