import Hi from "./Hi";
import Bye from "./Bye";
import Start from "./Start"
import React from "react";
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
      <Route exact path="/" element={[< Start/>]} />
        <Route exact path="/hi" element={[<Hi />]} />
        <Route exact path="/bye" element={[<Bye/>]} />
      </Routes>
      </div>

  )
}
export default App;
