const express = require("express");
const app = express();

//config
if (process.env.NODE_ENV !== "production"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}

module.exports = app;