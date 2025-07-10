import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
  res.json({ message: '✅ Test route working!' });
});

// Add this error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;