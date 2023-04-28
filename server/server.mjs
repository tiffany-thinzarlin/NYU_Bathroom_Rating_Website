import express from "express";
import mongoose from "mongoose";
import sanitize from "mongo-sanitize";
import "./db.mjs";
import cors from "cors";
import bcrypt from "bcryptjs";
import session from "express-session";
import path from "path";
import url from "url";
import jest from "jest";
import { startAuthenticatedSession, endAuthenticatedSession } from "./auth.mjs";
import cy from "cypress";

const app = express();
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

//app.set("view engine", "hbs");
//app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(cors());
const User = mongoose.model("User");
const Review = mongoose.model("Review");

app.get("/", async (req, res) => {
  //res.render("index");
  res.json("here");
});

app.get("/reviews", async (req, res) => {
  Review.find()
    .then((reviews) => res.json(reviews))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.get("/filterReview", async (req, res) => {
  const { minRating, maxRating } = req.query;
  let filter = {};
  if (minRating) {
    filter.rating = { $gte: parseInt(minRating) };
  }

  if (maxRating) {
    if (filter.rating) {
      filter.rating.$lte = parseInt(maxRating);
    } else {
      filter.rating = { $lte: parseInt(maxRating) };
    }
  }

  try {
    const reviews = await Review.find(filter);
    res.json(reviews);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

app.get("/filterNameReview", async (req, res) => {
  let { bathroom } = req.query;
  let filter = {};

  if (bathroom) {
    bathroom = bathroom; // trim leading/trailing white spaces
    filter.bathroom = bathroom;
  }

  try {
    const reviews = await Review.find(filter);
    res.json(reviews);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

//express.json.
app.post("/addReview", async (req, res) => {
  const newReview = new Review({
    bathroom: sanitize(req.body.bathroom),
    review: sanitize(req.body.review),
    rating: sanitize(req.body.rating),
  });

  try {
    console.log("Saving new review:", newReview);
    await newReview.save();
    console.log("New review saved:", newReview);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error saving new review:", error);
    res.status(500).send("Internal server error");
  }
});

app.listen(process.env.PORT ?? 3001);
