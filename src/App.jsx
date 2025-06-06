 import './App.css'
import demoPic from '../src/assets/img/Untitled.png'

let time = new Date().toLocaleTimeString();
let today = new Date().toLocaleDateString();
const welcom = ["Chào mừng đến React"];

function Header(){
  return (
    <>
     <h1>{welcom[0]}</h1>
  <p>Hôm nay là: <strong>{today}</strong>. thời gian hiện tại {""}
  <trong>{time}</trong>
  </p>
    </>
  )
}

const name = "Nam";

function DynamicValue(){
  return (
    <>
    <h2>Chào {name}</h2>
    </>
  )
}

function App() {
 return (<>
 <DynamicValue/>
 <Header/>
 <img src= {demoPic} className='imageDemo' />
  </>)
}

export default App
