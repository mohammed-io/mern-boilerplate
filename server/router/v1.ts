import * as express from 'express';

import { 
  getPosts, 
  getPostById, 
  createPost, 
  updatePost, 
  deletePost 
} from '../controllers/PostController';


export default (app) => {

  const apiRoutes = express.Router();
  const postRoutes = express.Router();



  /**************************************
  ===== Post Endpoints
  **************************************/

  // append postRoutes to apiRoutes
  apiRoutes.use('/posts', postRoutes);

  // get all posts
  postRoutes.get('/', getPosts);

  // get post by id
  postRoutes.get('/:id', getPostById);

  // create post
  postRoutes.post('/', createPost);

  // update post by id
  postRoutes.put('/:id', updatePost);

  // delete post by id
  postRoutes.delete('/:id', deletePost);


  /**************************************
  ===== append apiRoutes to app
  **************************************/
  app.use('/v1', apiRoutes);


}