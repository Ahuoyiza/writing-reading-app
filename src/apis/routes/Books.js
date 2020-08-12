import express from "express";

import books from "../controllers/Books";
import { auth } from "../../config/middleware";

const router = express.Router();

router.post("/create-book", auth, books.createBook);
router.get("/view-personal-books", auth, events.viewPersonalBooks);

export { router as booksRouter };
