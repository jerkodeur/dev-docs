import { ITodo } from "../types/todo"
import { model, Schema } from 'mongoose'

// Define Itodo as a Schema
const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true
    },
  },
  { timestamps: true }
)

export default model<ITodo>("Todo", todoSchema)