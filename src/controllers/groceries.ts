import { RequestHandler } from "express";
import Groceries from "../models/Groceries";

export const getGroceryNames: RequestHandler = async (req, res) => {
    const allGroceryNames = await Groceries.find({});
    if (allGroceryNames) {
        res.json({
            message: "Success on saveing grocery name.",
            allNames: allGroceryNames,
            status: true,
        });
    }
};

export const saveGroceryNames: RequestHandler = async (req, res) => {
    const { grocery } = req.body;
    const groceryExists = await Groceries.findOne({ grocery: grocery });

    if (!groceryExists) {
        const newGrocerieName = new Groceries({
            grocery,
        });
        await newGrocerieName.save();
        const allGroceryNames = await Groceries.find({});

        res.json({
            message: "Success on saveing grocery name.",
            allNames: allGroceryNames,
            status: true,
        });
    } else {
        res.json({
            message: "Grocery name already exists",
            status: false,
        });
    }
};
