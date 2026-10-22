import { Card } from 'react-bootstrap';

function RecipeMain({ foodrecipe }) {
  if (!foodrecipe) {
    return (
      <div className="recipe-details">
        <h4>Select a recipe</h4>
        <p>Click a recipe card on the left to view its details.</p>
      </div>
    );
  }

  return (
    <div className="recipe-details">
      <Card className="recipe-detail-card">
        <Card.Img
          variant="top"
          src={foodrecipe.image}
          alt={foodrecipe.title}
        />

        <Card.Body>
          <Card.Title>{foodrecipe.title}</Card.Title>
          <Card.Text>{foodrecipe.desc}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RecipeMain;