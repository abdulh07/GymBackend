import express from "express";
import {
  createAUser,
  getAllUser,
  getBookingsForUser,
  getUser,
  updateUserProfile,
  userLogIn,
} from "../controller/userController.js";
import verifyUser from "../utils/verifyUser.js";
import { addExercise, getExercises } from "../controller/exerciseController.js";
import { chat, createChat, getChatsWith, getHistory } from "../controller/chatController.js";

const userRouter = express.Router();

userRouter.post("/signup", createAUser);
userRouter.post("/signin", userLogIn);

userRouter.get("/allUser", getAllUser);
userRouter.get("/getUser", verifyUser, getUser);
userRouter.get("/bookings", getBookingsForUser);

userRouter.patch("/updateUser", updateUserProfile);
//chat
userRouter.post("/create-chat",createChat);
userRouter.get("/getChatsWith/:id",getChatsWith);
userRouter.post("/chat",chat);
userRouter.get("/gethistory/:id",getHistory);
//ex
userRouter.post("/add", addExercise);
userRouter.get("/getExercises/:id", getExercises);




export default userRouter;
