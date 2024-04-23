const app = require("./app");
const connectDatabase = require("./db/Database");

// handling uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server for handling uncaught exception`);

})

// connect to database
connectDatabase()

// create server
// const PORT = app.listen(process.env.PORT || 30000);
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})

// unhandled promise rejection
process.on("unhandledRejection", (err)=>{  
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`Shutting down the server for unhandled promise rejection`);

    server.close(() =>{
        process.exit(1);
    })
})