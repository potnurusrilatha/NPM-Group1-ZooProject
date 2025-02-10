import express from "express";
import * as path from "path";

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");

app.get("/",(req,res) => {
    res.send("Hello this is from NPM project");
})

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));