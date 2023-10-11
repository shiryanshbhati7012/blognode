
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }))

//app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/server")
app.use('/posts', postRoutes);
//mongoose.set('useFindAndModify', false);

app .listen(process.env.PORT,()=>{
  console.log(`the server is running on port ${process.env.PORT}` )
});