import { Schema, model } from "mongoose";

interface ShoppingList {
    id: string;
    authorId: string;
    title: string;
    completed: boolean;
    groceries: [
        {
            id: string;
            grocery: string;
            quantity: string;
            unit: string;
            checked: boolean;
            recipeTitle?: string;
            portions: number;
        }
    ];
}

const shoppingListSchema = new Schema<ShoppingList>({
    id: { type: String, required: true },
    authorId: { type: String, required: true },
    title: { type: String, required: true },
    completed: { type: Boolean, required: true },
    groceries: [
        {
            id: { type: String, required: true },
            grocery: { type: String, required: true },
            quantity: { type: String, required: true },
            unit: { type: String, required: true },
            checked: { type: Boolean, required: true },
            recipeTitle: { type: String },
            portions: { type: Number, required: true },
        },
    ],
});

export default model("ShoppingList", shoppingListSchema);
