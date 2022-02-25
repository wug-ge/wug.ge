import { NextFunction, Request, Response } from "express";

export class DefaultController {
  public async success(request: Request, response: Response, next: NextFunction) {
    response.json({success: "true"})
  }
}