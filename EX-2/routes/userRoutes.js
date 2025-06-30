import { Router } from "express";
import { getAllBook, getAllBooksByAuthor, getAuthorWithBooks, createBookForAuthor } from "../controllers/controller.js";


export const router = Router();

router.get('/books', getAllBook);
router.get('/books/author/:authorId', getAllBooksByAuthor);
router.post('/books', createBookForAuthor);
router.get('/author/:authorId/books', getAuthorWithBooks);