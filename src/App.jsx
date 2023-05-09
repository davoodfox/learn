import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Memoization from "./Memoization/Memoization";
import TypeScript from "./TypeScript/TypeScript";
import Home from "./Home";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/memo">memo, useMemo, useCallback</Link>
          </li>
          <li>
            <Link to="/typescript">TypeScript</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memo" element={<Memoization />} />
        <Route path="/typescript" element={<TypeScript />} />
      </Routes>
    </>
  );
}

export default App;
