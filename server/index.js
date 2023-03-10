import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'
import cors from 'cors'
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import allRoutes from './routes/index.js';

const PORT = process.env.PORT || 5000
const app = express();

// middleware

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());

// route
app.use('/api', allRoutes);

mongoose.set('strictQuery', false)
const connectDB = async()=>{
     try {
          await mongoose.connect(process.env.DB_CONNECTION_STRING)
          console.log('connect mongodb')
     } catch (error) {
          console.log(error)
          process.exit(1);
          
     }
}

app.listen(PORT, ()=>{
     connectDB()
     console.log(`server is running at port ${PORT}`)
})

