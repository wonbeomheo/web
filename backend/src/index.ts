import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log(`Error connecting: ${error}`);
    });

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res:Response) => {
    res.json({message: "Hello!"});
})

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});

export default app;
