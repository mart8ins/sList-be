import { Router } from "express";
import { createShoppingList, deleteShoppingList, getShoppingLists, updateShoppingList } from "../controllers/shoppingList";

const router = Router();

router.get("/", getShoppingLists);

router.post("/", createShoppingList);

router.post("/update", updateShoppingList);

router.post("/delete", deleteShoppingList);

export default router;
