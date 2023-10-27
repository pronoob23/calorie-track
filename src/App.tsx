import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ViewFoods from './components/ViewFoods';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/view-foods" element={<ViewFoods/>} />
        <Route element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
