import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Auth from "./components/Auth";
import "./index.css";
import AuthSecondary from "./components/AuthSecondary";
import Data from "./components/Data";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} />{" "}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/authsecondary" element={<AuthSecondary />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
