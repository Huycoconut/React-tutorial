export default function TabButoon({ children, onSelect }) {

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
