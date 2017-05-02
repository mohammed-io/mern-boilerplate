// import { Router, Request, Response, NextFunction } from "express";
// import * as passport from 'passport';
// import * as LocalStrategy from 'passport-local';
// import User from '../models/User';


// export class AuthRouter {

//   router: Router;

//   constructor() {
//     this.router = Router();
//     this.routes();
//   }

//   public login(req: Request, res: Response, next: NextFunction) {
//     passport.use(new LocalStrategy(
//       function(username, password, done) {
//         User.findOne({ email }, (err, user) => {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false, { error: 'Invalid User.' }); }

//         User.comparePassword(password, (err, isMatch) => {
//           if (err) { return done(err); }
//           if (!isMatch) { return done(null, false, { error: 'Invalid Password.' }); }

//           return done(null, user);
//         });
//       });
//       }
//     ));
//   }


//   // create user
//   public logout(req: Request, res: Response, next: NextFunction): void {

//     User.find()
//     .then((user) => {
//       res.status(201).json({ user });
//     })
//     .catch((error) => {
//       res.status(500).json({ error });
//     })
//   }


//   routes() {
//     this.router.get('/', this.login);
//     this.router.post('/', this.logout);
//   }


// }

// const authRoutes = new AuthRouter();
// authRoutes.routes();

// export default authRoutes.router;