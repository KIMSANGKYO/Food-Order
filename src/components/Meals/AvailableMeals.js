import styled from "styled-components";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healty...and green...",
    price: 18.99,
  },
];

const FoodList = styled.section`
  background-color: white;
  color: black;
  margin: 100px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <FoodList>
      <ul>{mealsList}</ul>
    </FoodList>
  );
}
