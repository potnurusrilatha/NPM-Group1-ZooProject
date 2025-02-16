import express from "express";
import { birdArray } from "../data/animals.js";




const birdsRouter = express();

birdsRouter.get("/",(req,res) => {
    res.render("pages/home.ejs",{   
        body_class:"home",
        header_class:"home",
        main_content_page : "birds",
        welcome_text : "Birds",
        animal_names : birdArray
    })
})

birdsRouter.get("/Cassowary",(req,res) => {
    let Cassowary = birdArray[0];
    res.render("pages/home.ejs",{
        welcome_text: "Bird - Cassowary",
        main_content_page : "animals",
        animal:Cassowary,
        animal_names : birdArray
    })
})

birdsRouter.get("/Kookaburra",(req,res) => {
    let Kookaburra = birdArray[1];
    res.render("pages/home.ejs",{
        welcome_text: "Bird - Kookaburra",
        main_content_page : "animals",
        animal:Kookaburra,
        animal_names : birdArray
    })
})

birdsRouter.get("/Yellow-Tailed%20Black%20Cockatoo",(req,res) => {
    let YellowTailedBlackCockatoo = birdArray[2];
    res.render("pages/home.ejs",{
        welcome_text: "Bird - Yellow Tailed Black Cockatoo",
        main_content_page : "animals",
        animal: YellowTailedBlackCockatoo,
        animal_names : birdArray
    })
})



export default birdsRouter;