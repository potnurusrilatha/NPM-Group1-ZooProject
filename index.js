import express from "express";
import * as path from "path";
import mammalsRouter from "./routes/mammals_router.js";
import { animalArray } from "./data/animals.js";
import reptilesRouter from "./routes/reptiles_router.js";


const app = express();
const PORT = 3000;
const __dirname = path.resolve();

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.get("/",(req,res) => {
    console.log(animalArray.length)
    res.render("pages/home.ejs",{
        welcome_text : "home",
        animal_names : animalArray
    })
})

app.use("/mammals",mammalsRouter);
app.use("/reptiles",reptilesRouter);

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));