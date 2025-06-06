import "./App.css";
import demoPic from "../src/assets/img/Untitled.png";
import demoPic_01 from "../src/assets/img/image_01.png";
import PropTypes from "prop-types";

let time = new Date().toLocaleTimeString();
let today = new Date().toLocaleDateString();
const welcom = ["Chào mừng đến React"];

function App() {
  return (
    <>
      <DynamicValue />
      <Header />
      <ul>
        <MainContent
          image={demoPic}
          desc="sdkfhsdfffffffffffssssssssssssssssssssssss"
          title="sdlfdkjfhgkdshg"
        />
        <MainContent
          image={demoPic_01}
          desc="sdkfhsdfffffffffffssssssssssssssssssssssss"
          title="sdlfdkjfhgkdshg"
        />
        <MainContent
          image={demoPic}
          desc="sdkfhsdfffffffffffssssssssssssssssssssssss"
          title="sdlfdkjfhgkdshg"
        />
        <MainContent
          image={demoPic_01}
          desc="sdkfhsdfffffffffffssssssssssssssssssssssss"
          title="sdlfdkjfhgkdshg"
        />
      </ul>
    </>
  );
}

function MainContent(props) {
  return (
    <>
      <li>
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </li>
    </>
  );
}

MainContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  desc: PropTypes.string,
};

function Header() {
  return (
    <>
      <h1>{welcom[0]}</h1>
      <p>
        Hôm nay là: <strong>{today}</strong>. thời gian hiện tại {""}
        <trong>{time}</trong>
      </p>
    </>
  );
}

const name = "Nam";

function DynamicValue() {
  return (
    <>
      <h2>Chào {name}</h2>
    </>
  );
}

export default App;
