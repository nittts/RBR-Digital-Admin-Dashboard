import { NextFunction, Request, Response } from "express";
import { RateLimiterMemory } from "rate-limiter-flexible";

const limiterOps = {
  points: 100,
  duration: 60,
};

const rateLimiter = new RateLimiterMemory(limiterOps);

const rateLimiterMiddleware = (req: Request, res: Response, next: NextFunction) => {
  rateLimiter
    .consume(req.ip!)
    .then((rateLimiterRes) => {
      res.setHeader("Retry-After", rateLimiterRes.msBeforeNext / 1000);
      res.setHeader("X-RateLimit-Limit", 100);
      res.setHeader("X-RateLimit-Remaining", rateLimiterRes.remainingPoints);
      res.setHeader("X-RateLimit-Reset", new Date(Date.now() + rateLimiterRes.msBeforeNext).toISOString());
      next();
    })
    .catch(() => {
      res.status(409).json({ message: "Too many Requests.", success: false });
    });
};

export default rateLimiterMiddleware;
