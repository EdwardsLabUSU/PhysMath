import logo from './logo.svg';
import Bead from './pages/bead_on_hoop';
import Drag from './pages/projectile_drag';
import Layout from './pages/layout';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import './mathquill_styling/mathquill.css';
//import './mathquill/mathquill-0.10.1/mathquill-basic.css'

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
        
          <Route class = "links" path="bead" element={<Bead />} />
          <Route path="drag" element={<Drag />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

