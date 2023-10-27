import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

interface Food {
  id: number;
  name: string;
  calories: number;
  vegetarian: boolean;
}

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const TableHeader = styled.th`
  background-color: #007bff;
  color: #fff;
  padding: 16px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 12px;
`;

function ViewFoods() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    // Fetch food items from the backend API
    axios.get<Food[]>('http://localhost:5000/api/foods').then((response) => {
      setFoods(response.data);
    });
  }, []);

  return (
    <div>
      <h1>View Foods</h1>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Calories</TableHeader>
            <TableHeader>Vegetarian</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {foods.map((food) => (
            <TableRow key={food.id}>
              <TableCell>{food.name}</TableCell>
              <TableCell>{food.calories}</TableCell>
              <TableCell>{food.vegetarian ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ViewFoods;
