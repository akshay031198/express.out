const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static(`${__dirname}/public`));
app.set('view engine','ejs');

 const menu_json = fs.readFileSync(__dirname + '/ejs-menu.json','utf-8');
const menu = JSON.parse(menu_json);
console.log(menu);

app.get('/',(req,res)=>{
   res.render("ejs-strips", {menu: menu});
})

app.listen(4000, ()=>{
    console.log("server at 4000");
})
