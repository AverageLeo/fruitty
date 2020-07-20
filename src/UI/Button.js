import styled from "styled-components";

const Button = styled.button`
  margin-top: 2rem;
  background-color: transparent;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: 1px solid #000;
  transition: ease-in 0.2s;
  :hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export default Button;
