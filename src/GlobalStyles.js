import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`body { 
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    rgba(213, 253, 198, 0.7),
    rgba(213, 253, 198, 0.7)
  ),
  url("./assets/doodle.png");
  background-repeat: repeat;
  background-size: auto;
}
button {
  cursor: pointer;
}
`;

export default GlobalStyle;
