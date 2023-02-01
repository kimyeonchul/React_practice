import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Avartar from "./components/Avartar";

function AppProfile() {
  const name = "연출";
  const list = ["바나나", "우유", "딸기", "요거트"];
  const handlerClick = (event) => {
    console.log(event);
  };
  return (
    <>
      <button onClick={handlerClick}>버튼</button>
      <Avartar image="https://source.unsplash.com/random" isNew={true} />
      <Profile
        image="https://source.unsplash.com/random"
        name="James Kim"
        title="Fromtend Develope"
        isNew={true}
      />
      <Profile
        image="https://source.unsplash.com/random"
        name="Anna"
        title="Backend Develope"
      />
      <Profile
        image="https://source.unsplash.com/random"
        name="bob"
        title="backend"
      />
    </>
  );
}

export default AppProfile;
