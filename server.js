import express from "express"
const app = express();
const port = process.env.PORT || 3000;
import AuthRoutes from './src/routes/auth.route.js';
import { connectDB } from './src/lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-frontend-domain.com'] 
    : ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json('Hello, World!');
});


app.use('/api/auth', AuthRoutes);


const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();



