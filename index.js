import express from "express";
import * as path from "path";
import { animalArray } from "./data/animals.js";
import mammalsRouter from "./routes/mammals_router.js";
import { style_file_name } from "./data/animals.js";

const PORT = 3000;
const app = express();
const __dirname = path.resolve();

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")))


app.get("/",(req,res) => {
    res.render("pages/home.ejs",{
        animal : animalArray,
        style_file_name:["home"],
        main_content_page :"home",
        body_class_name:"home",
        welcome_text : "Australian Zoo",
        animal_names : animalArray
    })
})


app.use("/mammals",mammalsRouter);
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));