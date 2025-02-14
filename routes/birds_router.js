import express from "express";
import { birdArray } from "../data/animals.js";

const birdsRouter = express();

birdsRouter.get("/",(req,res) => {
    res.render("pages/home.ejs",{   
        style_file_name : "home",
        body_class:"birds",
        header_class:"home",
        main_content_page : "home",
        welcome_text : "birds",
        animal_names : birdArray
    })
})

birdsRouter.get("/Cassowary",(req,res) => {
    let Cassowary = birdArray[0];
    res.render("pages/animal_display.ejs",{
        welcome_text: "birds",
        main_content_page : "animals",
        animal:Cassowary,
        animal_names : birdArray
    })
})

birdsRouter.get("/Kookaburra",(req,res) => {
    let Kookaburra = birdArray[1];
    res.render("pages/animal_display.ejs",{
        welcome_text: "birds",
        main_content_page : "animals",
        animal:Kookaburra,
        animal_names : birdArray
    })
})

birdsRouter.get("/Yellow%20Tailed%20Black%20Cockatoo",(req,res) => {
    let YellowTailedBlackCockatoo = birdArray[2];
    res.render("pages/animal_display.ejs",{
        welcome_text: "birds",
        main_content_page : "animals",
        animal: YellowTailedBlackCockatoo,
        animal_names : birdArray
    })
})



export default birdsRouter;