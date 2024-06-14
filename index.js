import express from 'express';
import dotenv from 'dotenv';


// Definations
const app = express();


// middleware
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());