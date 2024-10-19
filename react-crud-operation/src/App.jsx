import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Crud App/Home";
import Create from "./Crud App/create";
import Update from "./Crud App/Update";
import Read from "./Crud App/Read";
Update;

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
