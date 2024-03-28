import { Router } from "express";
import BookController from "../controllers/book.controller.js";

const router = Router();

router.get("",BookController.getBooks);
router.get("/:id", BookController.getBook);
router.post("",BookController.createBook);
router.patch("/:id",BookController.updateBook);
router.delete("/:id",BookController.deleteBook);
router.get("/author/:author", BookController.getBookByAuthor);
router.delete("/", BookController.deleteAllBooks);





export default router


