import React from "react";
import PrergForm from "./PrergForm";
import LandPage from "./LandPage";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/prereg" element={<PrergForm />} />
      </Routes>
    </div>
  );
};

export default App;
