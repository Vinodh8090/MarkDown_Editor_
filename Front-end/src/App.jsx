import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import MkEditor from "./pages/MkEditor";

function App() {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/editor" element={<MkEditor />} />
         </Routes>
      </>
   );
}

export default App;
