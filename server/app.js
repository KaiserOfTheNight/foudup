import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import AuthRoutes from './src/routes/auth.route.js';
import ProjectRoutes from './src/routes/project.route.js';
import UserRoutes from './src/routes/user.route.js';

dotenv.config();

const app = express();

app.get('/test', (req, res) => {
  res.json({ message: '✅ Test route working!' });
});


app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', AuthRoutes);
app.use('/api/projects', ProjectRoutes);
app.use('/api/user', UserRoutes);


export default app;
