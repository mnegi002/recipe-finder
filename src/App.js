import "./styles.css";
import styled from "styled-components";
import Component, { RecipeContainer } from "./Component";
import { useState } from "react";
import axios from "axios";
import logo from "./new.webp"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 20px;
  font-weight: bold;
  width: 100vw;
  height: 60px;
  font-size: 25px;
`;

const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;

const AppIcon = styled.img`
  display: flex;
  width: 45px;
  height: 45px;
  padding: 1px;
  margin: 0 10px 0 10px;
`;

const SearchComponent = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 600px;
  height: 40px;
  padding: 5px;
  border-radius: 2px;
`;
const SearchIcon = styled.i`
  color: black;
`;

const SearchBar = styled.input`
  margin-left: 8px;
  padding-top: 10px;
  font-size: 15px;
  padding: 5px;
  width: 550px;
  height: 35px;
  outline: none;
  border: none;
`;

const RecipeListContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 30px;
`;

const Placeholder = styled.img`
  width: 200px;
  height: 200px;
  margin: 200px;
  opacity: 0.5;
`;

export default function App() {
  const [timeoutID, updateTimeoutID] = useState();
  const [recipeList, updateRecipeList] = useState([]);
  const fetchRecipe = async (searchString) => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=eb88ca87&app_key=a039f0908596963f8b3a53a3a09efef8`
    );
    console.log(response);
    updateRecipeList(response.data.hits);
  };
  const changeInput = (event) => {
    clearTimeout(timeoutID);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeoutID(timeout);
  };
  return (
    <>
      <Container>
        <Header>
          <AppNameComponent>
            <AppIcon src={logo} alt="logo" />
            Recipe Finder
          </AppNameComponent>
          <SearchComponent>
            <SearchIcon className="fa-solid fa-magnifying-glass " />
            <SearchBar
              type="search"
              placeholder="Search Recipe"
              onChange={changeInput}
            />
          </SearchComponent>
        </Header>
        <RecipeListContainer>
          {recipeList.length ? (
            recipeList.map((recipeObj) => (
              <Component recipeObj={recipeObj.recipe} />
            ))
          ) : (
            <Placeholder src= {logo}/>
          )}
        </RecipeListContainer>
      </Container>
    </>
  );
}
