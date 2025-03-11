import { Routes, Route, Link } from "react-router-dom";
import Product from "./components/Products/Product";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboards/Dashboard";
import { Suspense } from "react";
import Settings from "./components/Settings/Settings";
import Overview from "./components/Overview/Overview";

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
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<Overview />}></Route>
          <Route path="settings" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Settings />
            </Suspense>
          }>
          </Route>
        </Route>
      </Routes>
      
    </div>
  )
}

function About() {
  return <h2>About</h2>
}


export default App
