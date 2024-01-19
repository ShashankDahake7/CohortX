import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { Landing } from "./components/Landing.jsx";
// import { Dashboard } from "./components/Dashboard.jsx";
const Dashboard = lazy(() => import("./components/Dashboard.jsx")); // Get only Dashboard Page rather than every page from server(make Dashboard component "export default function Dashboard()")
const Landing = lazy(() => import("./components/Landing.jsx")); // Get only Landing Page rather than every page from server(make Landing component "export default function Landing()")

function App() {
  return (
    <div>
      {/* Incorrect */}
      {/* <div>
        <button onClick={() => { window.location.href = "/dashboard" }}>Dashboard</button>
        <button onClick={() => { window.location.href = "/" }}>Landing</button>
      </div> */}
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
    // Correct 
    <div>
      <button onClick={() => { navigate("/dashboard") }}>Dashboard</button>
      <button onClick={() => { navigate("/") }}>Landing</button>
    </div>
  )
}

export default App
