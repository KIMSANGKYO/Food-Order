import { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const BackDrop = (props) => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  <div className="modal">
    <div className="content">{props.children}</div>
  </div>;
};

const portalElement = document.getElementById("overlays");

const ModalOn = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
  }

  .modal {
    position: fixed;
    top: 20vh;
    left: 5%;
    width: 90%;

    background-color: white;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: slide-down 300ms ease-out forwards;
  }
`;
export default function Modal(props) {
  return (
    <ModalOn>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </ModalOn>
  );
}
