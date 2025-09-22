import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* Add other routes here as you create pages */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
