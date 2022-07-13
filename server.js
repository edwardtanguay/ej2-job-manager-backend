import express from 'express';
import { JobSource } from './models/JobSource.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

const user = {
    id: 1,
    username: 'hans',
    firstName: 'Hans',
    lastName: 'Richter'
};

dotenv.config();

const MONGODB_URI =
    process.env.MONGODB_URI || 'mongodb://localhost/ej2-job-manager';

mongoose.connect(MONGODB_URI, (err) => {
    if (err) console.log(err);
});

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3045;

app.get('/', (req, res) => {
    res.send('<h1>EJ2 Job Manager API</h1>');
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === 'hans' && password === '123') {
        res.json({ user });
    } else {
        res.sendStatus(403);
    }
});

app.get('/job-sources', async (req, res) => {
    const jobSources = await JobSource.find();
    res.status(200).json(jobSources);
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
