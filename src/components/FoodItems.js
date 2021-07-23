import React from 'react'
import FoodItem from './FoodItem'

const food = [
  {
    foodName: 'Italian Combo',
    price: '12.99',
    ingredients: 'tomato, lettuce, chicken, hot sauce',
  },
  {
    foodName: 'Philly Burger',
    price: '9.99',
    ingredients: 'sourdough bread, hot sauce, pepperjack cheese, bison patty',
  },
  {
    foodName: 'Smoothie',
    price: '11.99',
    ingredients: 'apples, kiwi, soy milk',
  },
]

function FoodItems() {
  return (
    <div>
      {food.map((foodie) => (
        <FoodItem item={foodie} />
      ))}
    </div>
  )
}

export default FoodItems
