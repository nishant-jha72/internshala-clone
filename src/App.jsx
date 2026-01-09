import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Internships from "./pages/Internships";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
function DummyPage({ title }) {
  return (
    <div className="flex justify-center items-center h-[70vh] text-2xl">
      {title} Page (Coming Soon)
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen bg-gray-100">
        <Navbar />

        <Routes>
          <Route path="/" element={<Internships />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/careers" element={<DummyPage title="Careers" />} />
          <Route path="/services" element={<DummyPage title="Services" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
