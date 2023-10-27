import { body } from 'express-validator';

export const createFoodValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('calories').isInt({ min: 0 }).withMessage('Calories must be a non-negative integer'),
  body('vegetarian').isBoolean().withMessage('Vegetarian must be a boolean'),
];

export const updateFoodValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('calories').isInt({ min: 0 }).withMessage('Calories must be a non-negative integer'),
  body('vegetarian').isBoolean().withMessage('Vegetarian must be a boolean'),
];
