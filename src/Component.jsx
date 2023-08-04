import styled from "styled-components";

export const RecipeContainer = styled.div`
  display: flex;
  width: 255px;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

export const CoverImage = styled.img`
  width: 230px;
  height: 230px;
  object-fit: cover;
`;
export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
  text-align: center;
`;

export const IngredientsText = styled.span`
  font-size: 18px;
  font-weight: bold;
  border: 1px solid green;
  padding: 10px 10px;
  border-radius: 4px;
  color: green;
  cursor: pointer;
  margin-bottom: 5px;
  text-align: center;
`;

export const SeeMoreText = styled.span`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin: 10px 0;
  border: 1px solid red;
  padding: 10px 10px;
  border-radius: 4px;
  color: red;
  cursor: pointer;
`;
const Component = (props) => {
  const { recipeObj } = props;
  return (
    <>
      <RecipeContainer>
        <CoverImage src={recipeObj.image} alt="err" />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText onClick={()=>alert("For more info go to google")}>Ingredients</IngredientsText>
        <SeeMoreText onClick={()=>window.open(recipeObj.url)}>See Complete Receipe</SeeMoreText>
      </RecipeContainer>
    </>
  );
};

export default Component;
