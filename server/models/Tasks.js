import mongoose from "mongoose";

const { Schema } = mongoose

const taskSchema = new Schema({
     title: {
          type: String,
          require : true,
     },
     completed: {
          type: Boolean,
          require: false,
          default: false
     },
     user: {
          type: Schema.Types.ObjectId,
          ref: "User",
          require: true,
     }
}, {timestamps: true})


export default mongoose.model("Task", taskSchema);