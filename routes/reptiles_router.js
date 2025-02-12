import express from "express";
import {reptileArray } from "../data/animals.js";


const reptilesRouter = express();

reptilesRouter.get("/",(req,res) => {
    res.render('pages/home',{
        welcome_text : "reptiles",
        animal_names : reptileArray
    })
})

 reptilesRouter.get("/Frill-necked lizard",(req,res) => {
//     let frillNeckedLizard = reptileArray[0];
//     res.render('pages/animal_display.ejs', {
//          animal_name: animal_name.name,

//     })
})

// reptilesRouter.get("/hawksbillTurtle" ,(req,res) => {
//     let hawksbillTurtle  = reptileArray[1];
//     res.render("pages/animal_display.ejs", {
//         animal_name: hawksbillTurtle.name,
//         group_name : hawksbillTurtle.groupName,
//         lifeSpan: hawksbillTurtle.lifeSpan,
//         food: hawksbillTurtle.food,
//         description: hawksbillTurtle.description,
//         length: hawksbillTurtle.length,
//         weight: hawksbillTurtle.weight,
//         place: hawksbillTurtle.place,
//         src: hawksbillTurtle.src,
//         group: hawksbillTurtle.group,
//         groupLink: hawksbillTurtle.groupLink
//     })
// })

// reptilesRouter.get("/perentie" ,(req,res) => {
//     let perentie  = reptileArray[2];
//     res.render("pages/animal_display.ejs", {
//         animal_name: perentie.name,
//         group_name : perentie.groupName,
//         lifeSpan: perentie.lifeSpan,
//         food: perentie.food,
//         description: perentie.description,
//         length: perentie.length,
//         weight: perentie.weight,
//         place: perentie.place,
//         src: perentie.src,
//         group: perentie.group,
//         groupLink: perentie.groupLink
//     })
// })

export default reptilesRouter;