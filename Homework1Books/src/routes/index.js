import { Router} from "express";
import bookRouter from "./books.routes.js";

const router = Router();

router.use("/books", bookRouter);

export default router