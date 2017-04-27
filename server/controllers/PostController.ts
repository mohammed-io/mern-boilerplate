import Post from '../models/Post';

// get all posts
export function getPosts(req, res, next) {
  Post.find()
  .then((posts) => {
    res.status(200).json({ posts });
  })
  .catch((error) => {
    res.status(500).json({ error });
  })
}

// get post by id
export function getPostById(req, res, next) {
  const id = req.params.id;

  Post.find(id)
  .then((post) => {
    res.status(200).json({ post });
  })
  .catch((error) => {
    res.status(500).json({ error });
  })
}


// create post
export function createPost(req, res, next) {
  
  const post = new Post(req.body)

  post.save()
  .then((post) => {
    res.status(200).json({ post });
  })
  .catch((error) => {
    res.status(500).json({ error });
  })

}


// update post by id
export function updatePost(req, res, next) {
  const id = req.params.id;

  Post.findByIdAndUpdate(id, req.body)
  .then((post) => {
    res.status(200).json({ post });
  })
  .catch((error) => {
    res.status(500).json({ error });
  })
}


// delete post by id
export function deletePost(req, res, next) {
  const id = req.params.id;

  Post.findByIdAndRemove(id)
  .then((post) => {
    res.status(200).json({ post });
  })
  .catch((error) => {
    res.status(500).json({ error });
  })
}
