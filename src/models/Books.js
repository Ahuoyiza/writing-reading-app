import mongoose, { Schema } from "mongoose";

const BookSchema = new Schema({
  title: {
    type: String,
  },
  bookCover: {
    type: String,
  },
  chapter: {
    type: String,
  },
  description: {
    type: Date,
  },
  genre: {
    type: String,
  },
  tags: [],
  content: {
    type: String,
  },
  copyright: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  viewers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
export default mongoose.model("Book", EventSchema);
