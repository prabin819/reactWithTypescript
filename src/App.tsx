import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button
        handleClick={() => {
          alert("button clicked");
        }}
      />
    </div>
  );
}

export default App;
