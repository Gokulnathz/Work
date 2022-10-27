import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import Category from "./Components/Category/Category";
import Products from "./Components/Products/Products";

function App() {
  return (
    <Router>
      <> 
      <Home></Home>
      </>
      <Routes>
          <Route exact path="/Category" element={<Category /> }/>
          <Route exact path="/Products" element={<Products /> }/>
          </Routes>
    </Router>
  );
}

export default App;
