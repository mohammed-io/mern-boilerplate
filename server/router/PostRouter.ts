import { Router, Request, Response, NextFunction } from "express";
import Post from '../models/Post';


export class PostRouter {

  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public getAllPosts(req: Request, res: Response, next: NextFunction) {
    Post.find((err, posts) => {
      if (err) {
        res.status(500).json({ err });
      }
      res.status(200).json({ posts });
    })
  }

  public getPostBySlug(req: Request, res: Response, next: NextFunction) {
    const slug = req.params.slug;
    
    Post.findOne({slug}, (err, post) => {
      if (err) {
        res.status(500).json({ err });
      }
      res.status(200).json({ post });
    });
  }


  // create post
  public createPost(req: Request, res: Response, next: NextFunction): void {
    const title = req.body.title;
    const slug = req.body.slug;
    const content = req.body.content;

    if (!title || !slug || !content) {
      res.status(422).json({ message: 'All Fields Required.' });
    }

    const post = new Post({
      title,
      slug,
      content
    });

    post.save((err, post) => {
      if (err) {
        res.status(500).json({ err });
      }
      res.status(200).json({ post });
    });

  }


  // update post by slug
  public updatePost(req: Request, res: Response, next: NextFunction): void {
    const slug = req.body.slug;

    Post.findOneAndUpdate({slug}, req.body, (err, post) => {
      if (err) {
        res.status(500).json({ err });
      }
      res.status(200).json({ post });
    });
  }


  // delete post by slug
  public deletePost(req: Request, res: Response, next: NextFunction): void {
    const slug = req.body.slug;

    Post.findOneAndRemove({slug}, (err, post) => {
      if (err) {
        res.status(500).json({ err });
      }
      res.status(204).json({ post });
    });
  }



  routes() {
    this.router.get('/', this.getAllPosts);
    this.router.get('/:slug', this.getPostBySlug);
    this.router.post('/', this.createPost);
    this.router.put('/:slug', this.updatePost);
    this.router.delete('/:slug', this.deletePost);
  }


}

const postRoutes = new PostRouter();
postRoutes.routes();

export default postRoutes.router;