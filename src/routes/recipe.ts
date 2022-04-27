import { Router } from "express";
// const express = require("express");
// const Router = express.Router;
import { createRecipe, getRecipes, deleteRecipe } from "../controllers/recipes";

const router = Router();

router.get("/", getRecipes);

router.post("/", createRecipe);

router.post("/delete", deleteRecipe);

export default router;
