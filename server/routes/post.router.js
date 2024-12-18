const {Router} = require("express")
const { getAllPost, getPostById, createPost, updatePost, deletePost } = require("../controller/post.controller");
const upload = require("../middleware/imageUpload");

const postRouter = Router()

postRouter.get("/all",getAllPost);
postRouter.get("/:id",getPostById);

postRouter.post("/create",upload.single("image"),createPost);

postRouter.patch("/update/:id",updatePost);

postRouter.delete("/delete/:id",deletePost);

module.exports = postRouter;