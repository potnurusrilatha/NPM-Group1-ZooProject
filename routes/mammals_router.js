import express from "express";
import { mammalArray } from "../data/animals.js";

const mammalsRouter = express();

mammalsRouter.get("/",(req,res) => {
    res.render("pages/home.ejs",{   
        welcome_text : "mammals",
        animal_names : mammalArray
    })
})

mammalsRouter.get("/echidna",(req,res) => {
    let echidna = mammalArray[0];
    res.render("pages/animal_display.ejs",{
        animal_name: echidna.name,
        group_name : echidna.groupName
    })
})

export default mammalsRouter;