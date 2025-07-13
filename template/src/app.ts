import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import testRoutes from './routes/test.route';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/test', testRoutes);

export default app;
