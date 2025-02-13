import express from "express";
import { animalArray, reptileArray } from "../data/animals.js";


const reptilesRouter = express();

reptilesRouter.get("/",(req,res) => {
    res.render('pages/home.ejs',{
        body_class: "home",
        header_class : "home",
        main_content_page : "home",
        welcome_text : "reptiles",
        style_file_name: "home",
        animal_names : reptileArray
    })
})

reptilesRouter.get("/Frillneckedlizard",(req,res)  => {
    let frillneckedlizard = reptileArray[1];
    res.render("pages/animal_display.ejs", {
        animal: frillNeckedLizard,
        main_content_page: "animals",
        welcome_text: "reptiles",
        animal_names:reptileArray

    })

})

 reptilesRouter.get("/perentie" ,(req,res) => {
    let perentie  = reptileArray[2];
    res.render("pages/animal_display.ejs", {
        animal: perentie,        
        main_content_page : "animals",
        welcome_text : "reptiles",
        animal_names: reptileArray

    })
 })

export default reptilesRouter;