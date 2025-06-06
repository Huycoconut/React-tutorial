export default function TabButoon({children}) {
    //
    function handleClick(){
        alert("Nut Bam Duoc Click");
    }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
