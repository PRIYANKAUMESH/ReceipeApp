import React from 'react';
import { Card } from 'react-bootstrap';

function RecipeSidebar({ foodRecipes, fetchRecipe }) {
  return (
    <div>
      {foodRecipes.map((recipe, index) => {
        return (
          <Card
            style={{ width: '18rem' }}
            key={index}
            onClick={() => fetchRecipe(recipe)}
          >
            <Card.Img variant="top" src={recipe.image} />

            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default RecipeSidebar;