import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Food from '../models/Food';

const foodController = {
  getAllFoods: async (req: Request, res: Response) => {
    try {
      const foods = await Food.findAll();
      return res.json(foods);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  createFood: async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, calories, vegetarian } = req.body;
    try {
      const food = await Food.create({
        name,
        calories,
        vegetarian,
      });
      return res.json(food);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  updateFood: async (req: Request, res: Response) => {
    const { id } = req.params;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const food = await Food.findByPk(id);
      if (!food) {
        return res.status(404).json({ message: 'Food not found' });
      }

      const { name, calories, vegetarian } = req.body;
      food.name = name;
      food.calories = calories;
      food.vegetarian = vegetarian;
      await food.save();

      return res.json(food);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  deleteFood: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const food = await Food.findByPk(id);
      if (!food) {
        return res.status(404).json({ message: 'Food not found' });
      }

      await food.destroy();
      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

export default foodController;
