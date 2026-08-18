import { Request, Response } from "express";
import * as taskService from
  "../services/taskService";

export async function list(
  req: Request, res: Response
) {
  const tasks = await taskService.findAll();
  res.json(tasks);
}
export async function getById(
  req: Request, res: Response
) {
  const id = Number(req.params.id);
  const task = await
    taskService.findById(id);
  res.json(task);
}
