import Home from "./pages/home/home";
import './App.css';

function App() {

  const hello = "Welcome to React !!!";

  return (
    <div className="App">
      <h1>{hello}</h1>
      <Home />
    </div>
  );
}

export default App;
