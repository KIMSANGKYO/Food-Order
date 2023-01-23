import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";
// toFixed(2) >  소수점 2자리까지 숫자나타내기

const EachFood = styled.li`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .food {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export default function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <EachFood>
      <div className="food">
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </EachFood>
  );
}
