import express from "express"
const app = express();
const port = process.env.PORT || 3000;
import AuthRoutes from './src/routes/auth.route.js';
import { connectDB } from './src/lib/db.js';
import cookieParser from 'cookie-parser';

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json('Hello, World!');
});


app.use('/api/auth', AuthRoutes);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  connectDB();
});




