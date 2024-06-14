import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <main className="container">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/user/:username" element={<User />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
