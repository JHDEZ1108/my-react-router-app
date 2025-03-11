import { Routes, Route, Link } from "react-router-dom";
import Product from "./components/Products/Product";
import Home from "./components/Home/Home";

function App() {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product/1">Product 1</Link>
          </li>
          <li>
            <Link to="/product/2">Product 2</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
      
    </div>
  )
}

function About() {
  return <h2>About</h2>
}


export default App
