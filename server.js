const express = require("express");
const speakeasy = require("speakeasy");
const uuid = require("uuid");

const port = process.env.port || 5000

const app = express()

app.get("/api", (req, res) => res.json({ message: "hello world" }))

app.listen(port, () => console.log(`Server is running on port ${port}`));