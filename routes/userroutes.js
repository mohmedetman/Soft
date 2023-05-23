
import { Router } from "express";
import { students, name } from "../database/usersarray.js";

const router = new router();

router.get("/",(req, res) => {
    res.render("users");
});

router.get("/create",(req, res) => {
});

router.get("/update",(req, res) => {
});

router.get("/delete",(req, res) => {
});

router.get("/;id",(req, res) => {
});

export default router; 