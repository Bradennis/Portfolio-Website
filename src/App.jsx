import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* Add other routes here as you create pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
