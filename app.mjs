import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import jest from "jest";
import cy from "cypress";
import User from "./db.mjs";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(process.env.PORT || 3000);
