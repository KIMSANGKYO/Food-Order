import styled from "styled-components";

const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  border-radius: 10px;
  background-color: rgb(198, 177, 38);
  color: white;
  .cart-count {
    background-color: rgb(167, 29, 29);
    border-radius: 10px;
    width: 20px;
  }
`;
export default function HeaderCartButton() {
  return (
    <CartButton>
      <i className="fa-sharp fa-solid fa-cart-shopping"></i>
      <span>Your Cart</span>
      <span className="cart-count">3</span>
    </CartButton>
  );
}
