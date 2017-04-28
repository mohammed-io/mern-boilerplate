import { Request, Response, NextFunction } from 'express';
import * as Promise from 'bluebird';
import User from '../models/User';


class UserController {

  // get all users
  public static get(params, callback): void {
    
    User.find(params, (err, users) => {
      if (err) {
        callback(err, null);
      }
      callback(null, users);
    })
    
  }


  // get user by slug
  public static getBySlug(slug, params, callback): void {
    
    User.findOne(slug, params, (err, user) => {
      if (err) {
        callback(err, null);
      }
      callback(null, user);
    });
  }



  // create user



  // update user by slug



  // delete user by slug




}


export default UserController;