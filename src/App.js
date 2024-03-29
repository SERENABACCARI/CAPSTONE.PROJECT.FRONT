//import logo from "../src/immagini/Logo.PNG";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from '../src/component/Navbar';
import Home from "../src/component/Home.jsx";
import About from "../src/component/About.jsx";
import Contact from "../src/component/Contact.jsx";
import Login from '../src/component/login.jsx'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../src/component/footer.jsx';
import Regolamento from '../src/component/Regolamento.jsx';
import Main from './component/mainLogin.jsx';
import Registrazione from './component/Registrazione.jsx';
import MainRegistrer from "../src/component/mainRegistrer.jsx"

/*import express from "express";

const server = express();
const port = 3020;

server.use(express.json());

server.listen(port, () => {
  console.log("Server is running on port " + port);
});*/

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mainLogin" element={<Main />} />
            <Route path="/Regolamento" element={<Regolamento />} />
            <Route path="/Registrazione" element={<Registrazione />} />
            <Route path="/mainRegistrer" element={<MainRegistrer />} />
          </Routes>
        </div>
          <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
