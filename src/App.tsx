import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { FeedBackPage } from "./pages/FeedbackPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
      <Routes>
        <Route path="/" element={<FeedBackPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
