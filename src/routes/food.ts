import express from 'express';
import foodController from '../controllers/foodController';

const router = express.Router();

// GET all food items
router.get('/', foodController.getAllFoods);

// POST a new food item
router.post('/', foodController.createFood);

// PATCH update a food item by ID
router.patch('/:id', foodController.updateFood);

// DELETE a food item by ID
router.delete('/:id', foodController.deleteFood);

export { router }; // Named export
