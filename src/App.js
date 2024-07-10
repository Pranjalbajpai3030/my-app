import React, { useState } from "react";
import './App.css';
import NavBar from './component/NavBar';
import News from './component/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container text-center mb-4">
          <img src="logo.png" alt="Logo" className="img-fluid responsive-logo" />
        </div>
        <LoadingBar
          color='#3D52A0'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} key="general" pageSize={5} country="in" category="General" />} />
          <Route path="/business" element={<News setProgress={setProgress} key="business" pageSize={5} country="in" category="Business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={5} country="in" category="Entertainment" />} />
          <Route path="/general" element={<News setProgress={setProgress} key="general" pageSize={5} country="in" category="General" />} />
          <Route path="/health" element={<News setProgress={setProgress} key="health" pageSize={5} country="in" category="Health" />} />
          <Route path="/science" element={<News setProgress={setProgress} key="science" pageSize={5} country="in" category="Science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={5} country="in" category="Sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={5} country="in" category="Technology" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
