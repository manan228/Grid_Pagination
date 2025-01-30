import express from "express"
import getUsers from "../controller/user.controller.js";

const router = express.Router();

router.get("/get-next-user-data", getUsers)

export default router