import './App.css';

import * as React from "react";
//import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from './pages/Books';
import Add from './pages/Add';
import Update from './pages/Update';
import "./style.css";
//const root = createRoot(document.getElementById("root"));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update/:id" element={<Update/>}/>          
        </Routes>
      </BrowserRouter>
     My App
    </div>
  );
}

export default App;
