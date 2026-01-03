import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import ContactUS from "./pages/ContactUS";
import IndustriesPage from "./pages/IndustriesPage";
// import Industries from "./pages/Industries.JSX";
// import Industries from "./pages/Industries";


// import Download from "./pages/Download";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0F3D2E] via-[#0B1F2A] to-[#0A1B25] text-white">
      <Navbar />
      
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<IndustriesPage />} />
          {/* <Route path="/industries" element={<Industries />} /> */}
          {/* <Route path="/exhibition" element={<Exhibition />} /> */}
          {/* <Route path="/download" element={<Download />} /> */}
          <Route path="/contact" element={<ContactUS />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;