import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/homepage/Homepage";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Header></Header>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
