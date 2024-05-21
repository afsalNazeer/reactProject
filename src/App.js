
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Nav from './includes/nav/nav.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
