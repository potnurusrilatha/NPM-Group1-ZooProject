import express from "express";
import * as path from "path";
import { animalArray } from "./data/animals.js";
import reptilesRouter from "./routes/reptiles_router.js";



const app = express();
const PORT = 3000;
const __dirname = path.resolve();

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")))


app.get("/",(req,res) => {
    console.log(animalArray.length)
    res.render("pages/home.ejs",{
        animal : animalArray,
        main_content_page :"home",
        body_class:"home",
        welcome_text : "Australian Zoo",
        animal_names : animalArray
    })
})

app.use("/reptiles",reptilesRouter)

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));