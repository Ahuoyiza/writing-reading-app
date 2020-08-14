//import jwt from "jsonwebtoken";
//import bcrypt from "bcryptjs";

import dotenv from "dotenv";
import fileUpload from "express-fileupload";

import BookForm from "../../models/BookForm";
dotenv.config();
app.use(fileUpload());
export default {
  //Upload Endpoint
  UploadCover: async (req, res, next) => {
    if (req.files === null) {
      return res.status(400).json({ msg: "No file uploaded" });
    }
    const file = req.files.file;
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  },

  createBookForm: async (req, res, next) => {
    try {
      const newBookForm = new BookForm({
        title: req.body.title,
        bookCover: req.body.bookCover,
        chapter: req.body.chapter,
        description: req.body.description,
        genre: req.body.genre,
        tags: req.body.tags,
        copyright: req.body.copyright,
        author: req.user._id,
      });

      const savedBook = await newBookForm.save();

      await User.findByIdAndUpdate(
        req.user._id,
        { $push: { books_created: savedBook._id } },
        { new: true }
      );

      res.json({
        msg: "Book created successfully",
        book: savedBook,
      });
    } catch (err) {
      res.json({ msg: err });
    }
  },
};
