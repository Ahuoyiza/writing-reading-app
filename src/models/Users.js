import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: String,
  interests: {
    type: String,
  },
  books_written: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
  books_saved: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

export default mongoose.model("User", UserSchema);
