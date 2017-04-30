import { Router, Request, Response, NextFunction } from "express";
import User from '../models/User';


export class UserRouter {

  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public getAllUsers(req: Request, res: Response, next: NextFunction) {
    User.find((err, users) => {
      if (err) {
        res.status(500).json({ err });
      }
      res.status(200).json({ users });
    });
  }

  public getUserBySlug(req: Request, res: Response, next: NextFunction) {
    const slug = req.params.slug;
    
    User.findOne({slug}, (err, user) => {
      if (err) {
        res.status(500).json({ err });
      }
      res.status(200).json({ user });
    });
  }


  // create user
  public createUser(req: Request, res: Response, next: NextFunction): void {
    const name = req.body.name;
    const slug = req.body.slug;
    const email = req.body.email;
    const password = req.body.password;

    if (!name || !slug || !email || !password) {
      res.status(422).json({ message: 'All Fields Required.' });
    }

    const user = new User({
      name,
      slug,
      email,
      password
    });

    user.save((err, user) => {
      if (err) {
        res.status(500).json({ err });
      }
      res.status(200).json({ user });
    });

  }


  // update user by slug
  public updateUser(req: Request, res: Response, next: NextFunction): void {
    const slug = req.body.slug;

    User.findOneAndUpdate(slug, req.body, (err, user) => {
      if (err) {
        res.status(500).json({ err });
      }
      res.status(200).json({ user });
    });
  }


  // delete user by slug
  public deleteUser(req: Request, res: Response, next: NextFunction): void {
    const slug = req.body.slug;

    User.findOneAndRemove(slug, (err, user) => {
      if (err) {
        res.status(500).json({ err });
      }
      res.status(204).json({ user });
    });
  }



  routes() {
    this.router.get('/', this.getAllUsers);
    this.router.get('/:slug', this.getUserBySlug);
    this.router.post('/', this.createUser);
    this.router.put('/:slug', this.updateUser);
    this.router.delete('/:slug', this.deleteUser);
  }


}

const userRoutes = new UserRouter();
userRoutes.routes();

export default userRoutes.router;