import mongoose, { Schema } from "mongoose";

const BookFormSchema = new Schema({
  title: {
    type: String,
  },
  bookCover: {
    type: String,
  },

  description: {
    type: Date,
  },
  genre: {
    type: String,
  },
  tags: [],

  copyright: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
export default mongoose.model("BookForm", BookFormSchema);
