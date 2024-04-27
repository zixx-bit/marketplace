const express = require("express");
const ErrorHandler = require("./utils/ErrorHandler");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require ("body-parser");
const cors = require("cors");
// const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({extended:true, limit: "50mb"}));
// app.use(fileUpload({useTempFiles: true}));

//config
if (process.env.NODE_ENV !== "production"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}
// import routes 
const userController = require("./controller/userController");

app.use("/api/v2/user", userController);

// error handling
app.use(ErrorHandler);

module.exports = app;