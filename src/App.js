import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from './component/NavBar';
import News from './component/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const TitleBar = () => (
  <div className="title-bar" id="title-bar">
    <h1>News Express</h1>
  </div>
);

const App = () => {
  const [progress, setProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const titleBar = document.getElementById('title-bar');
      const navbar = document.getElementById('navbar');
      if (window.scrollY > titleBar.clientHeight) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <TitleBar />
      <BrowserRouter>
        <NavBar setSearchQuery={setSearchQuery} />
        <LoadingBar
          color='#3D52A0'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} key="general" pageSize={5} country="in" category="General" searchQuery={searchQuery} />} />
          <Route path="/business" element={<News setProgress={setProgress} key="business" pageSize={5} country="in" category="Business" searchQuery={searchQuery} />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={5} country="in" category="Entertainment" searchQuery={searchQuery} />} />
          <Route path="/general" element={<News setProgress={setProgress} key="general" pageSize={5} country="in" category="General" searchQuery={searchQuery} />} />
          <Route path="/health" element={<News setProgress={setProgress} key="health" pageSize={5} country="in" category="Health" searchQuery={searchQuery} />} />
          <Route path="/science" element={<News setProgress={setProgress} key="science" pageSize={5} country="in" category="Science" searchQuery={searchQuery} />} />
          <Route path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={5} country="in" category="Sports" searchQuery={searchQuery} />} />
          <Route path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={5} country="in" category="Technology" searchQuery={searchQuery} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
