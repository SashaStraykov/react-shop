const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const cors = require('cors');
require('dotenv/config');





const app = express();
const PORT = process.env.PORT || 3000

app.use(fileUpload({}))
app.use(express.json({ extended: true }))



app.use(bodyParser.json());

const corsConfig = {
  "origin": process.env.CLIENT_URL,
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}
app.use(cors(corsConfig));


// import routes

const postsRoutes = require('./routes/users');
const getCategory = require ('./routes/category')
const itemsRoutes = require('./routes/item')

// midleWere

app.use('/users', postsRoutes);
app.use('/category', getCategory);
app.use('/items', itemsRoutes)


async function startServer(){
  try{
    //connect db
    await mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, () => console.log('connected to db'));
    app.listen(PORT);
  } catch(e) {
    console.log('Server error ', e.message);
    process.exit(1);
  }
}

startServer();
