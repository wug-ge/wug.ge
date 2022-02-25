import * as express from 'express'
import { Routes } from './routes'
import { NextFunction, Request, Response } from "express";
import * as dotenv from 'dotenv'
import * as path from 'path'

class Server {
  constructor() {
    dotenv.config({ path: path.resolve(process.cwd() + '/..', '.env') })
    this.initiateExpress()
  }

  private initiateExpress() {
    const app: express.Application = express()

    Routes.forEach(route => {
      (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        const result = (new (route.controller as any))[route.action](req, res, next);
        if (result instanceof Promise) {
          result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

        } else if (result !== null && result !== undefined) {
          res.json(result);
        }
      });
    })
    app.listen(process.env.EXPRESS_PORT, () => {
      console.log(`App is listening on port ${process.env.EXPRESS_PORT}!`);
    })
  }
}

new Server()