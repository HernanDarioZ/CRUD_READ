import { Express } from "express";
import { createblog, DeleteBlog, getAllBlogs, getblog, updateBlog } from "../controllers/BlogController";

const router = Express.router()


router.get('/',getAllBlogs)

router.get('/:id', getblog)

router.post('/',createblog)

router.put('/:id',updateBlog)

router.delete('/:id',DeleteBlog)

export default router
