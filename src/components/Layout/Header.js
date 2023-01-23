import { Fragment } from "react";
import styled from "styled-components";
import mealsImage from "../../assets/burgers.webp";
import HeaderCartButton from "./HeaderCartButton";

const Head = styled.header`
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    background-color: rgb(167, 29, 29);
    justify-content: space-between;
  }
  img {
    width: 100%;
    height: 300px;
  }
  h1 {
    margin-left: 20px;
  }
  button {
    margin: 20px;
    cursor: pointer;
  }
`;
export default function Header(props) {
  return (
    <Fragment>
      <Head>
        <header>
          <h1>ReactMeals</h1>
          <HeaderCartButton />
        </header>
        <div>
          <img src={mealsImage} alt="A table food" />
        </div>
      </Head>
    </Fragment>
  );
}
