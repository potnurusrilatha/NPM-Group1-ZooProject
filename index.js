import express from "express";
import * as path from "path";
import { animalArray } from "./data/animals.js";
import birdsRouter from "./routes/birds_router.js";
import mammalsRouter  from "./routes/mammals_router.js";
import reptilesRouter from "./routes/reptiles_router.js";
import * as dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
const app = express();
// const PORT = 8000;
const __dirname = path.resolve();

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")))


app.get("/",(req,res) => {
    res.render("pages/home.ejs",{
        animal : animalArray,
        main_content_page :"home",
        body_class_name:"home",
        welcome_text : "Australian Zoo",
        animal_names : animalArray
    })
})

// app.use("/mammals", mammalsRouter);
// app.use("/birds",birdsRouter);
// app.use("/Reptiles",reptilesRouter)

app.get("/:groupName", (req, res) => {
    const groupName = req.params.groupName.toLowerCase();

    const validGroups = ["mammals", "birds", "reptiles"];
    if (!validGroups.includes(groupName)) {
        return res.status(404).send("Category not found");
    }

    const filteredAnimals = animalArray.filter(
        (animal) => animal.groupName.toLowerCase() === groupName.toLowerCase()
    );

    console.log(filteredAnimals);

    res.render("pages/home.ejs", {
        main_content_page: groupName,
        welcome_text: `${groupName.toUpperCase()}`,
        animal_names: filteredAnimals
    });
});

app.get("/:groupName/:animalName", (req, res) => {
    const { groupName, animalName } = req.params;

    const foundAnimal = animalArray.find(
        (animal) =>
            animal.groupName.toLowerCase() === groupName.toLowerCase() &&
            animal.name.replace(/ /g, "-").toLowerCase() === animalName.toLowerCase()
    );

    if (!foundAnimal) {
        return res.status(404).send("Animal not found");
    }

    const filteredAnimals = animalArray.filter(animal => animal.groupName === groupName);
    console.log(filteredAnimals);

    res.render("pages/home.ejs", {
        animal: foundAnimal,
        main_content_page: "animals",
        welcome_text: `${groupName} - ${foundAnimal.name}`,
        animal_names: filteredAnimals
    });
});


app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
