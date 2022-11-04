import React from 'react'
import { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    
  const [searchBarText, setSearchBarText] = useState('');
  const [foundsFood, setFoundsFood] = useState([{}]);
  const [clicked, setClicked] = useState(false);


  const navigate = useNavigate();
  
  const inputHandler = (e) => setSearchBarText(e.currentTarget.value);

  const getFood = async (queryParameter) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${queryParameter}`);
    const foods = await response.json();

    // // const foodObj = {
    // //   foodImage: foods.meals[0].strMealThumb,
    // //   foodName: foods.meals[0].strMeal,
    // // };

    // setFoundsFood(foodObj);
    setFoundsFood([...foods.meals]);
  };

  const clickHandler = () => {
    getFood(searchBarText);
    setClicked(true);
  }

  // const [meals. setMeals] = React.useState([]);
  //   setMeals([...foods.meals])
  //   meals.map(meal => <li>{meal.strMeal}</lI>)

  return (
    <div className='home-page'>
        <div className='search-container'>
          <h1>Piatto</h1>
          <h1>{searchBarText}</h1>
          <input className='input-search' type="text" placeholder='insert your text here...' onChange={(e) => inputHandler(e)} />
          <button className='search-button' onClick={clickHandler}>Click here to search</button>

          {
            (foundsFood && clicked) ?
            foundsFood.map((meal) => 
              (<div className="card-container" onClick={() => navigate('/details', {
                state: {
                    id: meal.strMeal
                }
            })}>
                <h1>{meal.strMeal}</h1>
                <div className="card" style={{backgroundImage: `url(${meal.strMealThumb})`}}></div>
              </div>))
              : null
          }

        </div>
      </div>
  )
}

export default Home;