import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import sessionRoutes from "./routes/sessions.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/sessions", sessionRoutes);

const CONNECTION_URL = "mongodb+srv://poker-sessions:poker-sessions@cluster0.2ntjc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);