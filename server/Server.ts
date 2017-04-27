import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as path from 'path';

// custom modules


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

    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(logger('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());

    this.app.listen(3000, () => {
      console.log(`Listening on port ${process.env.PORT || 3000}`);
    });

  }

  // application routes
  public routes(): void {
    let router = express.Router();

    this.app.use('/', router);
    // this.app.use('/api/users', UserRouter);
  }

}

// export
export default new Server().app;