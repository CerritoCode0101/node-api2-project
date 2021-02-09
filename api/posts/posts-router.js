// implement your posts router here
const model = require('./posts-model');
const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
    model.find().then(( posts ) => {
        res.status(200).json( posts );
    }).catch(() => res.status(500).json({ message: "The posts information could not be retrieved" }));
});

router.get("/:id", (req, res) => {
    const idVar = req.params.id
    model.findById(idVar).then((post) => {
        if (!post) {
            res.status(404).json({ message: "The post with the specified ID does not exist" });
        }else {
            res.status(200).json(post);
        }
    }).catch(() => res.status(500).json({ message: "The post information could not be retrieved" }));
});

router.post("/", (req, res) => {
    const post = req.body
    model.insert(post).then(newPost => {
        res.status(201).json(newPost);
    }).catch(() => res.status(500).json({ message: "There was an error while saving the post to the database" }))
})

router.put("/:id", (req, res) => {
    const idVar = req.params.id;
    const post = req.body;
    model.update(idVar, post).then((upPost) => {
        if (upPost) {
            res.status(200).json(upPost);
        }else {
            res.status(404).json({ message: "The post with the specified ID does not exist" });
        }
    }).catch(() => res.status(500).json({ message: "The post information could not be modified" }));
});

router.delete("/:id", (req, res) => {
    const idVar = req.params.id;
    model.remove(idVar).then((post) => {
        res.status(200).json({message: `The ${post} was deleted`});
    }).catch(() => res.status(500).json({ message: "The post could not be removed" }));
});

router.get("/:id/comments", (req, res) => {
   const idVar = req.params.id
    model.findCommentById(idVar).then(post => {
        if (post) {
            res.status(200).json(post)
        }else {
            res.status(404).json({message: "This comment does not exist"})
        }
    }).catch(() => res.status(500).json({message: "your comment could not be retrived"}))
})


module.exports = router;