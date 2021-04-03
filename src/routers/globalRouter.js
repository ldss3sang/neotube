import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get("/join", HandleJoin);
export default globalRouter;
