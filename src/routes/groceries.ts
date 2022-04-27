import { Router } from "express";
import { getGroceryNames, saveGroceryNames } from "../controllers/groceries";

const router = Router();

router.get("/", getGroceryNames);
router.post("/", saveGroceryNames);

export default router;
