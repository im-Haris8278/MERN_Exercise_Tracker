const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const exercisesRouter = require("./routes/exerciseRoutes");
const usersRouter = require("./routes/userRoutes");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

mongoose
  .connect(
    "mongodb+srv://Haris:seeker47@exercise.rbznivg.mongodb.net/Exercise?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB Successfully"));

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}`);
});
