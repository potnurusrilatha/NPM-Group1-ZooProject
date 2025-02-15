import express from "express";
import { mammalArray } from "../data/animals.js";
import { style_file_name } from "../data/animals.js";

const mammalsRouter = express();

mammalsRouter.get("/",(req,res) => {
    res.render("pages/home.ejs",{   
        style_file_name : ["home","mammals"],
        body_class_name:"mammals",
        header_class:"home",
        main_content_page : "mammals",
        welcome_text : "Mammals",
        animal_names : mammalArray
    })
})

mammalsRouter.get("/echidna",(req,res) => {
    let echidna = mammalArray[0];
    res.render("pages/animal_display.ejs",{
        welcome_text: "mammals",
        body_class_name:"mammals",
        style_file_name : ["mammals","home"],
        main_content_page : "animals",
        animal:echidna,
        animal_names : mammalArray
    })
})

mammalsRouter.get("/Tasmanian-Devil",(req,res) => {
    let tasmanian = mammalArray[1];
    res.render("pages/animal_display.ejs",{
        welcome_text: "mammals",
        body_class_name:"mammals",
        style_file_name : ["mammals","home"],
        main_content_page : "animals",
        animal:tasmanian,
        animal_names : mammalArray
    })
})

mammalsRouter.get("/Quokka",(req,res) => {
    let quokka = mammalArray[0];
    res.render("pages/animal_display.ejs",{
        welcome_text: "mammals",
        body_class_name:"mammals",
        style_file_name : ["mammals","home"],
        main_content_page : "animals",
        animal: quokka,
        animal_names : mammalArray
    })
})

export default mammalsRouter;
