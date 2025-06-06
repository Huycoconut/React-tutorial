import "./App.css";

import { data } from "../src/data";
import TabButton from "./component/TabButton.jsx";
import Header from "./component/Header/Header.jsx";
import MainContent from "./component/MainContent/MainContent.jsx";

function App() {
  //
  function handleClick(selectButton) {
    alert(`Nut Bam ${selectButton} Duoc Click`);
  }
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
          <TabButton onSelect={()=>{handleClick('React')}}>React</TabButton>
          <TabButton onSelect={()=>{handleClick('Flutter')}}>Flutter</TabButton>
          <TabButton onSelect={()=>{handleClick('Node JS')}}>Node JS</TabButton>
          <TabButton onSelect={()=>{handleClick('Andgular')}}>Angular</TabButton>
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
