
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Home from "./content/home";
import Employee from "./content/employee";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="flex pt-14">
          <Sidebar />
          <div className="flex-1">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/employee" element={<Employee />} />
              {/* Tambahkan rute-rute lain di sini */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
