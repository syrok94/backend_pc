const express = require("express");
const fs = require("fs");
const https = require('https');
const dotenv = require("dotenv");

dotenv.config();

const PORT = 5000;

const httpsOptions = {
    key : fs.readFileSync(process.env.SSL_KEY),
    cert : fs.readFileSync(process.env.SSL_CERT),
}

const app = express();
const server = https.createServer(httpsOptions , app);

app.get("/", (req, res) => {
  res.status(200).send("hello");
});

server.listen(PORT, (req, res) => {
  console.log("server is running on port 5000...");
});
