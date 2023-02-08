import logo from "./logo.svg";
import "./App.css";
import Button1 from "./Button1";
import Button2 from "./Button2";
import styled, { css } from "styled-components";
import StyledComponent from "./StyledComponent";
import TailwindComponent from "./TailwindComponent";

function App() {
  return (
    <>
      <Button1 />
      <Button2 />
      <StyledComponent />
      <TailwindComponent />
    </>
  );
}

export default App;
