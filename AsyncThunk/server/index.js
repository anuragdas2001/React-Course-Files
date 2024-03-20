const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes=require("./todoRoutes");
// const app = express();
const server = express();

server.use(bodyParser.json());
server.use(cors());
server.listen(4100);

server.use("/api/todos/", todoRoutes.router);

server.get("/", (req, res)=>{
    res.send("Welcome to Utility api");
});
console.log("Server is listening at 4100");