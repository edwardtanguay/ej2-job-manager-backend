import express from 'express';
import { JobSource } from './models/JobSource.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URI = 'mongodb://localhost/ej2-jog-manager';

mongoose.connect(MONGODB_URI);

const app = express();
const port = process.env.PORT || 3045;

app.get('/', (req, res) => {
	res.send('<h1>EJ2 Job Manager API</h1>')
});

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`);
});