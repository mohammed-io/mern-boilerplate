import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as handlebars from 'handlebars';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as path from 'path';

// react
import React from 'react';
import { renderToString } from 'react-dom/server';
import { BrowserRouter as Router, } from 'react-router-dom';
import AppIndex from '../client/src/app/AppIndex';

// custom modules
import UserRouter from './router/UserRouter';
import PostRouter from './router/PostRouter';
// import { ApiRouter } from './router/ApiRouter';


// Server class
class Server {

  public app: express.Application;


  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  
  // application config
  public config() {

    const MONGO_URI: string = 'mongodb://localhost/mern-boilerplate'; 
    mongoose.connect(MONGO_URI);

    // view engine for rendering React
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'handlebars');

    // express middleware
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(logger('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());

  }

  // application routes
  public routes(): void {

    let router: express.Router;
    router = express.Router();

    this.app.use('/', router);
    this.app.use('/api/v1/user', UserRouter);
    this.app.use('/api/v1/posts', PostRouter);
  }

  // public routes(): void {
  //   let router: express.Router;
  //   router = express.Router();

  //   ApiRouter.getAll(router);
  //   ApiRouter.getBySlug(router);
  //   this.app.use('/api/v1', router);
  // }

}

// export
export default new Server().app;