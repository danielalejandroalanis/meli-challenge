import { Response } from "express";

export const handleError = (res: Response, err: unknown): void => {
  res
    .status(404)
    .json({ error: err instanceof Error ? err.message : "Unknown error" });
};
