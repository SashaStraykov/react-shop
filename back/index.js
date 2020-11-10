const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const methodOverride = require('method-override')
// const Grid = require('gridfs-stream');
require('dotenv/config');

const app = express();
const PORT = process.env.PORT || 3000

app.set("view engine", "ejs"); 
app.use('/uploads', express.static('uploads'))
app.use(helmet())
app.disable('x-powered-by');
app.use(express.json({ extended: true}))


app.use(methodOverride('_method '))

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

// midleWare
app.use('/users', postsRoutes);
app.use('/category', getCategory);
app.use('/items', itemsRoutes)

let gfs;
async function startServer(){
  try{
    //connect db
    await mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, () => console.log('connected to db'));
   
    // const connection = mongoose.connection;
    // connection.once('open',  () => {
    // gfs = Grid(connection.db, mongoose.mongo);
    // gfs.collection('uploads');
    // exports.gfs = gfs
    // })



    app.listen(PORT);
  } catch(e) {
    console.log('Server error ', e.message);
    process.exit(1);
  } 
}

startServer();
