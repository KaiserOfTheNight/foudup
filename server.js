import express from "express"
const app = express();
const port = process.env.PORT || 3000;
import UserRoutes from './src/routes/user.route.js';


app.get('/', (req, res) => {
  res.json('Hello, World!');
});

app.get('/api', (req, res) => {
  res.json('This is my fucking api!');
});

app.use('/api', UserRoutes);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
