import {PORT} from 'config/.env';

const app = require("./app");
import {PORT} from 'config/.env';
// handling uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server for handling uncaught exception`);

})

// create server
const PORT = app.listen(process.env.PORT || 30000);
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})

//config
if (process.env.NODE_ENV !== "production") {     
    require("dotenv").config({
        path:"backend/config/.env"
    })    
}


// unhandled promise rejection
process.on("unhandledRejection", (err)=>{
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`Shutting down the server for unhandled promise rejection`);
     
    server.close(() =>{
        process.exit(1);
    })

})