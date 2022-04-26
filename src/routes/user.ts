import { Router } from "express";
// const express = require("express");
// const Router = express.Router;
import { signIn } from "../controllers/user";

const router = Router();

router.post("/", signIn);

export default router;
