

import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModel } from "./db.js";
import { ContentModel } from "./db.js";
import { JWT_PASSWORD } from "./config.js";
import { UserMiddleware } from "./middleware.js";

const app = express();
app.use(express.json())


app.post("/api/v1/signup", async (req, res) => {
  // zod validation &  hash the password
  const username = req.body.username;
  const password = req.body.password;
  try {
    await UserModel.create({
      username: username,
      password: password
    })
    res.json({
      message: "User Signed Up "
    })
  } catch (e) {
    res.status(411).json({
      message: "User already exists"
    })
  }

})

app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const existUser = await UserModel.findOne({
    username,
    password
  })
  if (existUser) {
    const token = jwt.sign({
      id: existUser._id
    }, JWT_PASSWORD)

    res.json({
      token
    })
  }
  else {
    res.status(403).json({
      message: "Incorrect Credentials"
    })
  }
})

app.post("/api/v1/content", UserMiddleware, async (req, res) => {
  const link = req.body.link;
  const type = req.body.type;
  await ContentModel.create({
    link,
    type,
    //title: req.body.title,
    //@ts-ignore
    userId: req.userId,
    tags: []
  })

  return res.json({
    message: 'Content added'
  })

})

app.get("/api/v1/content", UserMiddleware, async (req, res) => {
  //@ts-ignore
  const userId = req.userId;
  const content = await ContentModel.find({
    userId: userId
  }).populate('userId')
  res.json({
    content
  })
})

app.delete("/api/v1/content", async (req, res) => {
  const contentId = req.body.contentId;

  await ContentModel.deleteMany({
    contentId,
    //@ts-ignore
    userId: req.userId
  })
  res.json({
    message: 'Deleted'
  })
})

app.get("/api/v1/brain/:shareLink", (req, res) => {

})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
