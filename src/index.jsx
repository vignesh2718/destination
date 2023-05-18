import React  from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";
function App(){
    return (
      <BrowserRouter>
     <header>
      <Link className="site-logo" to="/">#VANLIFE</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
     </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
  
      </Routes>
      
      </BrowserRouter> 
    )
}





ReactDOM.createRoot(document.getElementById('root')).render(
   <App/>
  );