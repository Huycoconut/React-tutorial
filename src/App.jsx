import "./App.css";

import { data } from "../src/data";
import TabButton from "./component/TabButton.jsx"
import Header from "./component/Header/Header.jsx";
import MainContent from "./component/MainContent/MainContent.jsx";

function App() {
  return (
    <>
      <DynamicValue />
      <Header />
      //cach 1
      <div className="main-tab-wrapper">
  <ul className="main-list">
    <MainContent {...data[0]} />
    <MainContent {...data[1]} />
    <MainContent {...data[2]} />
    <MainContent {...data[3]} />
  </ul>

  <div className="tab-buttons">
    <TabButton>React</TabButton>
    <TabButton>Flutter</TabButton>
    <TabButton>Node JS</TabButton>
    <TabButton>Angular</TabButton>
  </div>
</div>

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
