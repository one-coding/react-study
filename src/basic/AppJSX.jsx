import "./App.css";

function AppJSX() {
  const name = "jaewon";
  const list = ["우유", "딸기", "바나나"];

  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p style={{ fontSize: "20px" }}>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
