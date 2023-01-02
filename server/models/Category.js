import mongoose from "mongoose";

const { Schema } = mongoose

const categorySchema = new Schema({
     categoryName: {
          type: String,
          require : true,
     },
     user: {
          type: Schema.Types.ObjectId,
          ref: "User",
          require: true,
     }
})


export default mongoose.model("Category", categorySchema);