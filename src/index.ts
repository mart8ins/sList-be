import express, { Request, Response, NextFunction } from "express";
import recipeRoutes from "./routes/recipe";
import shoppingListRoutes from "./routes/shoppingList";
import userRoutes from "./routes/user";

const app = express();

app.use("recipe", recipeRoutes);
app.use("shoppingList", shoppingListRoutes);
app.use("user", userRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});

app.listen(3001, () => {
    console.log("app started");
});
