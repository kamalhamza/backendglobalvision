const express = require('express');
const app =express();
const bodyParser=require('body-parser');
const morgan=require('morgan');
const mongoose=require('mongoose'); //mongodb
const cors=require ('cors');//Import Cors


app.use(cors());
app.options('*',cors())

const authJwt = require('./helpers/jwt');
const errorHandler=require('./helpers/error-handler');

//********************************************************************************************************** */
//------------------Variable ENV-------------------
require('dotenv/config');

//********************************************************************************************************** */
//----------------Midleware------------------------
app.use(bodyParser.json());
app.use (morgan('tiny'));//log
app.use(authJwt());
app.use(errorHandler)

//********************************************************************************************************** */
//---------Déclaration des Routes-------------------------
const employeRouter=require('./routers/employe');
const agencyRouter=require('./routers/agency');
const userRouter=require('./routers/user');
//********************************************************************************************************** */
//--------API= API_URL de chez le .env-------
const api =process.env.API_URL;
//------Routers----------------
app.use(`${api}/agency`,agencyRouter);
app.use(`${api}/employe`,employeRouter);
app.use(`${api}/user`,userRouter);


//********************************************************************************************************** */
// ---------------Connexion à La base de donné MangoDB------------------
mongoose
  .connect(process.env.CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "zineeval",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });
//********************************************************************************************************** */
// ----------------------Server connexion & PORT---------------------
//developpement

//Production server Hors localhost
var server=app.listen(process.env.PORT || 3000,function(){
    var port =server.address().port;
    console.log('express marche sur le port'+port)
})
//********************************************************************************************************** */
