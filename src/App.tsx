import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/privacidade" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
