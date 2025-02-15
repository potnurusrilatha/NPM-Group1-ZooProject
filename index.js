import express from "express";
import * as path from "path";
import { animalArray } from "./data/animals.js";
import birdsRouter from "./routes/birds_router.js";
import mammalsRouter  from "./routes/mammals_router.js";
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
        style_file_name:["home"],
        main_content_page :"home",
        body_class_name:"home",
        welcome_text : "Australian Zoo",
        animal_names : animalArray
    })
})

app.use("/reptiles",reptilesRouter)
app.use("/birds",birdsRouter);
app.use("/mammals", mammalsRouter);
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
