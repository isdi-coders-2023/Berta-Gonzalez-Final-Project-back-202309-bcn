import { Router } from "express";
import BallsMongooseRepository from "../repository/BallsMongoooseRepository.js";
import BallsController from "../controller/BallsController.js";
import ballValidation from "../schema/ballSchema.js";

const ballsRouter = Router();

const ballsMongooseRepository = new BallsMongooseRepository();
const ballsController = new BallsController(ballsMongooseRepository);

ballsRouter.get("/", ballsController.getBalls);
ballsRouter.delete("/:ballId", ballsController.deleteBall);
ballsRouter.post("/add", ballValidation, ballsController.addBall);
ballsRouter.patch("/", ballsController.modifyIsTengui);

export default ballsRouter;
