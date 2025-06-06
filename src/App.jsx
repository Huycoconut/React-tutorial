import "./App.css";

import { data } from "../src/data";
import Header from "./component/Header/Header.jsx";
import MainContent from "./component/MainContent/MainContent.jsx";

function App() {
  return (
    <>
      <DynamicValue />
      <Header />
      //cach 1
      <ul>
        <MainContent
          image={data[0].image}
          desc={data[0].desc}
          title={data[0].title}
        />
        //cach 2
        <MainContent {...data[1]} />
        <MainContent {...data[1]} />
        <MainContent {...data[1]} />
      </ul>
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
