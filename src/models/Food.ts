import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Food extends Model {
  public id!: number;
  public name!: string;
  public calories!: number;
  public vegetarian!: boolean;
}

Food.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 0,
      },
    },
    vegetarian: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: 'food',
    sequelize,timestamps: false,
  }
);

export default Food;
