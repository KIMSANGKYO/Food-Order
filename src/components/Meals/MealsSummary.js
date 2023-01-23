import styled from "styled-components";

const Summary = styled.section`
  width: 500px;
  height: 200px;
  background-color: gray;
  position: relative;
  border-radius: 20px;
  text-align: center;
  margin: auto;
  padding: 1rem;
  margin-top: -6rem;
  box-shadow: 5px 5px 10px 10px black;
`;

export default function MealsSummary() {
  return (
    <Summary>
      <h2>Delicious Food, Delivered To You</h2>
      <p>Choose your favorite meal and enjoy</p>
      <p>All our meals are cooked with high-quality ingredients</p>
    </Summary>
  );
}
