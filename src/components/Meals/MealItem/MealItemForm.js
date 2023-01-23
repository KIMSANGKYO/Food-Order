import styled from "styled-components";
import Input from "../../UI/Input";

const MealForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;

  button {
    background-color: rgb(167, 29, 29);
    color: white;
    border-radius: 20px;
  }
`;
export default function MealItemForm() {
  return (
    <MealForm>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </MealForm>
  );
}

// input 태그 type:number
// 속성 max (최댓값), min(최솟값), step(입력하는숫자 간격), defaultValue(초깃값)
