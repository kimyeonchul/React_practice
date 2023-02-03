import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "김연출";
  const list = ["우유", "딸기", "바나나"];
  return (
    <>
      <h1 className="orange">{`hello ${name}`}</h1>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
        {/* 아래는 같은 방법 */}
        {list.map((item) => {
          return <li>{item}</li>;
        })}
        {/* 아래는 같은 방법 */}
        {list.map(function (item) {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default AppJSX;
