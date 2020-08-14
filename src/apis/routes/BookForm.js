import express from "express";

import bookForm from "../controllers/BookForm";
import { auth } from "../../config/middleware";

const router = express.Router();

router.post("/uploads", auth, bookForm.UploadCover);
router.post("/book-form", auth, bookForm.createBookForm);

export { router as booksRouter };
