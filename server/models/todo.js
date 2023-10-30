import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
    title: String,
    description: String
}, { timestamps: true });


const TodoModels = mongoose.models.TodoModels || mongoose.model('TodoModels', todoSchema);

export default TodoModels;
