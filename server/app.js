import express from 'express';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
app.use(express.json());

app.get('/test', (req, res) => {
  res.json({ message: '✅ Test route working!' });
});

export default app;
