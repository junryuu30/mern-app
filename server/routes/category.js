import express from "express";
import { createCategory, deleteAllCategory, deleteCategory, getAllCategory, getCurrentUserCategory, updateCategory } from "../controllers/Category.js";

const router = express.Router();

router.get('/all', getAllCategory);

router.post("/", createCategory);

router.put("/:taskId", updateCategory);

router.get('/myTasks', getCurrentUserCategory);

router.delete('/deleteAll', deleteAllCategory);

router.delete('/:taskId', deleteCategory);


export default router;