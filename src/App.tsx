import ColorPallete from "./components/";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ position: "absolute" }}>
      <h1 className="title">Nonis Color Picker</h1>
      <ColorPallete />
    </div>
  );
}

export default App;
