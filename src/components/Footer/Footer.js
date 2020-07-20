import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  bottom: 1rem;
  z-index: 2;
`;

const Icon = styled.a`
  text-decoration: none;
  color: rgba(70, 94, 74, 0.6);
  margin: 0 0.5rem;
  transition: all 0.2s ease-in-out;
  color: ${(props) =>
    props.red ? "rgba(255, 0, 0, 0.4)" : "rgba(70, 94, 74, 0.5)"};
  font-size: 1.1rem;
  :hover {
    font-size: 1.5rem;
    color: rgba(117, 173, 54, 0.8);
  }
`;

const footer = (props) => {
  return (
    <FooterSection>
      <Icon href="https://www.linkedin.com/in/arie-levental/">
        <i className="fab fa-linkedin" />
      </Icon>
      <Icon href="https://github.com/AverageLeo">
        <i className="fab fa-github" />
      </Icon>
      <Icon href="mailto:arieka39@gmail.com">
        <i className="fas fa-envelope" />
      </Icon>
      <Icon href="https://arielevental.com">
        <i className="fas fa-beer"></i>
      </Icon>
      <Icon red href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <i className="fab fa-youtube"></i>
      </Icon>
    </FooterSection>
  );
};

export default footer;
