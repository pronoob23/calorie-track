import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router as foodRoutes } from './routes/food';
import errorHandler from './middleware/errorHandler'; // Import the error handler

const app = express();

app.use(cors());
app.use(bodyParser.json());

// API routes
app.use('/api/foods', foodRoutes);

app.use(errorHandler); // Use the error handler middleware

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
