import mongoose from "mongoose";
import slug from "mongoose-slug-updater";
// is the environment variable, NODE_ENV, set to PRODUCTION?
import fs from "fs";
import path from "path";
import url from "url";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
let dbconf;
if (process.env.NODE_ENV === "PRODUCTION") {
  // if we're in PRODUCTION mode, then read the configration from a file
  // use blocking file io to do this...
  const fn = path.join(__dirname, "config.json");
  const data = fs.readFileSync(fn);

  // our configuration file will be in json, so parse it and set the
  // conenction string appropriately!
  const conf = JSON.parse(data);
  dbconf = conf.dbconf;
} else {
  // if we're not in PRODUCTION mode, then use
  dbconf = "mongodb://localhost/final-project";
}
mongoose.connect(dbconf);
mongoose.plugin(slug);

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, minLength: 3, maxLength: 20 },
  password: { type: String, required: true, minLength: 8 },
  email: { type: String, required: true },
});

const ReviewSchema = new mongoose.Schema({
  bathroom: { type: String, required: true, minLength: 3, maxLength: 50 },
  review: {
    type: String,
    maxlength: 500,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

mongoose.model("User", UserSchema);
mongoose.model("Review", ReviewSchema);

/*

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  reviews: [
    {
      bathroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bathroom",
        required: true,
      },
      rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
      },
      review: {
        type: String,
        maxlength: 500,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
*/
