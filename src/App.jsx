import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YourInfo from "./pages/YourInfo";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import Sidebar from "./components/Sidebar";
import Finish from "./pages/Finish";

function App() {
  return (
    <main>
      <Router>
        <div className="md:flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<YourInfo />} />
            <Route path="/select-plan" element={<SelectPlan />} />
            <Route path="/add-ons" element={<AddOns />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/finish" element={<Finish />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
