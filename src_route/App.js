import Hi from "./Hi";
import Bye from "./Bye";
import React from "react";
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/hi" element={[<Hi />]} />
        <Route exact path="/bye" element={[<Bye/>]} />
      </Routes>

        <div>
        <Link exact to="/hi">
          <button>start</button>
        </Link>
      </div>

      </div>

  )
}
export default App;