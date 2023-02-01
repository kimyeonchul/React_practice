import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "연출";
  const list = ["바나나", "우유", "딸기", "요거트"];
  return (
    <>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
