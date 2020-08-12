import dotenv from "dotenv";

import User from "../../models/Users";
import Book from "../../models/Books";

dotenv.config();

export default {
  createEvent: async (req, res, next) => {
    try {
      const newBook = new Book({
        title: req.body.title,
        bookCover: req.body.bookCover,
        chapter: req.body.chapter,
        description: req.body.description,
        genre: req.body.genre,
        tags: req.body.tags,
        content: req.body.content,
        copyright: req.body.copyright,
        author: req.user._id,
      });

      const savedBook = await newBook.save();

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

  viewUploadedBooks: async (req, res, next) => {
    try {
      const personalBooks = await Book.find({ created_by: req.user._id });

      if (personalBooks.length === 0) {
        return res.json({ msg: "No book created yet" });
      }

      res.json({
        books: personalBooks,
      });
    } catch (err) {
      res.json({ msg: err });
    }
  },

  //updating a book
  updateBook: async (req, res, next) => {
    try {
      const findBook = await Book.findById(req.params.eventId);

      if (!findBook) {
        return res.json({ msg: "Book not found" });
      }

      const updatedBook = await Book.findByIdAndUpdate(
        req.params.bookId,
        req.body,
        { new: true }
      );

      res.json({
        msg: "Book updated successfully",
        post: updatedBook,
      });
    } catch (err) {
      res.json({ msg: err });
    }
  },
  //viewing a single book
  viewBook: async (req, res, next) => {
    try {
      const singleBook = await Event.findById(req.params.eventId);

      if (!singleBook) {
        return res.json("Book does not exist");
      }

      res.json({
        post: singleBook,
      });
    } catch (err) {
      res.json({ msg: err });
    }
  },
};
