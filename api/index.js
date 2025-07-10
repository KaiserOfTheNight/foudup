import serverless from 'serverless-http';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Add your routes here
app.get('/api/test', (req, res) => {
  res.json({ message: '✅ Test route working!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Export the serverless-http wrapped app
export const handler = serverless(app);