import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button
        handleClick={(event) => {
          console.log("button clicked", event);
        }}
      />
    </div>
  );
}

export default App;
