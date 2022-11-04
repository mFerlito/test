import React from 'react'
import { useEffect, useState } from 'react';
import '../App.css';

const MealDetails = () => {

    const [foundsFood, setFoundsFood] = useState([{}]);

    const getFood = async (queryParameter) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${queryParameter}`);
        const foods = await response.json();
        
        const foodObj = {
          foodName: foods.meals[0].strMeal,
          foodImage: foods.meals[0].strMealThumb,
          ingrediente1: foods.meals[0].strIngredient1,
          ingrediente2: foods.meals[0].strIngredient2,
          ingrediente3: foods.meals[0].strIngredient3,
          ingrediente4: foods.meals[0].strIngredient4,
          ingrediente5: foods.meals[0].strIngredient5,
          ingrediente6: foods.meals[0].strIngredient6,
          ingrediente7: foods.meals[0].strIngredient7,
          ingrediente8: foods.meals[0].strIngredient8,
        };
    
        setFoundsFood(foodObj);
    };

    useEffect(() => {
        getFood(window.history.state.usr.id);
    }, []);


  return (
    <div className='container2'>
       
        <h1>{foundsFood.foodName}</h1>
        <div className="card2" style={{backgroundImage: `url(${foundsFood.foodImage})`}} ></div>
        <h3> Gli ingredienti sono : {`${foundsFood.ingrediente1} - ${foundsFood.ingrediente2} - ${foundsFood.ingrediente3} - ${foundsFood.ingrediente4} - ${foundsFood.ingrediente5} - ${foundsFood.ingrediente6} - ${foundsFood.ingrediente7} - ${foundsFood.ingrediente8} `} </h3>
    </div>
  )
}

export default MealDetails;
