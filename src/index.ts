import express, { Request, Response, NextFunction } from "express";
import recipeRoutes from "./routes/recipe";
import shoppingListRoutes from "./routes/shoppingList";
import userRoutes from "./routes/user";
import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: true }), express.json());
app.use(cors());

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
//     next();
// });

app.use("/recipe", recipeRoutes);
app.use("/shoppingList", shoppingListRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
    console.log("Hi!");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});

app.listen(3001, () => {
    console.log("app started");
});
