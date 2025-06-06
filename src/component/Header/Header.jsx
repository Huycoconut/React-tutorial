let time = new Date().toLocaleTimeString();
let today = new Date().toLocaleDateString();
const welcom = ["Chào mừng đến React"];



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

export default Header;
