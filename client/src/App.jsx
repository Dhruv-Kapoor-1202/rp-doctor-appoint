import { Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import DashBoard from "@/pages/DashBoard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashbaord" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default App;
