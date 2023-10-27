import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router as foodRoutes } from './routes/food'; // Import using named export
import errorHandler from './middleware/errorHandler';
import sequelize from './config/database';

const app = express();

app.use(cors());
app.use(bodyParser.json());

// API routes
app.use('/api/foods', foodRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

sequelize.authenticate().then(() => {
  console.log('Database connection established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
