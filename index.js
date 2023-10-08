
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
//app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());



//const CONNECTION_URL = 'mongodb+srv://js_mastery:123123123@practice.jto9p.mongodb.net/test';
mongoose.connect("mongodb://127.0.0.1:27017/server")



app.use('/posts', postRoutes);

//mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
 // .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  //.catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);
app .listen(5000,()=>{console.log("server is running on port 5000")})