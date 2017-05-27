import { Router, Request, Response, NextFunction } from "express";
import User from '../models/User';


export class UserRouter {

  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public getUserBySlug(req: Request, res: Response, next: NextFunction) {
    const slug: string = req.params.slug;
    
    User.findOne({slug})
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch((error) => {
      res.status(500).json({ error });
    })
  }


  // create user
  public createUser(req: Request, res: Response, next: NextFunction): void {
    const name: string = req.body.name;
    const slug: string = req.body.slug;
    const email: string = req.body.email;
    const password: string = req.body.password;

    if (!name || !slug || !email || !password) {
      res.status(422).json({ message: 'All Fields Required.' });
    }

    const user = new User({
      name,
      slug,
      email,
      password
    });

    user.save()
    .then((user) => {
      res.status(201).json({ user });
    })
    .catch((error) => {
      res.status(500).json({ error });
    })
  }


  // update user by slug
  public updateUser(req: Request, res: Response, next: NextFunction): void {
    const slug: string = req.body.slug;

    User.findOneAndUpdate({slug}, req.body)
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch((error) => {
      res.status(500).json({ error });
    })
  }


  // delete user by slug
  public deleteUser(req: Request, res: Response, next: NextFunction): void {
    const slug: string = req.body.slug;

    User.findOneAndRemove({slug})
    .then((user) => {
      res.status(204).json({ user });
    })
    .catch((error) => {
      res.status(500).json({ error });
    })
  }



  routes() {
    this.router.get('/:slug', this.getUserBySlug);
    this.router.post('/', this.createUser);
    this.router.put('/:slug', this.updateUser);
    this.router.delete('/:slug', this.deleteUser);
  }


}

const userRoutes = new UserRouter();
userRoutes.routes();

export default userRoutes.router;