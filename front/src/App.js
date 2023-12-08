import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AgregarPersonaje from "./pages/AgregarPersonaje";
import DC from "./pages/Dc";

import DetallePersonaje from "./pages/DetallePersonaje";
import Home from './pages/Home'
import Marvel from "./pages/Marvel";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marvel" element={<Marvel />} />
        <Route path="/dc" element={<DC />} />
        <Route path="/detalle/:id" element={<DetallePersonaje />} />
        <Route path="/agregarpersonaje" element={<AgregarPersonaje />} />
      </Routes>
    </Router>
  );
}

export default App;
