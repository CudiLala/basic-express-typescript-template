import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/", (req, res) => {
  res.status(200).json({ succes: true, message: "Startup successful" });
});

app.all("*", (req, res) => {
  res.status(404).json({ success: false, message: "Path not found" });
});

app.listen(process.env.PORT || 9000, () =>
  console.log(`app started at port ${process.env.PORT || 9000}`)
);
