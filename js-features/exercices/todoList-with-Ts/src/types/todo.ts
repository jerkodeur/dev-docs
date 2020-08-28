import { Document } from "mongoose"

// Define the interface of the Itodo Object
export interface ITodo extends Document {
  name: String
  description: String
  status: Boolean
}
