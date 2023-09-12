const path = require('path');
const express=require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const userRoutes=require('./routes/todo')
const Todo = require('./models/todo');
const app=express();
var cors=require('cors')
app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(userRoutes)
app.use((req, res)=>{
  res.sendFile(path.join(__dirname,req.url));
})


  sequelize
    .sync()
    .then(result => {
      console.log('result');
      app.listen(5000);
    })
    .catch(err => {
      console.log(err);
    });
  