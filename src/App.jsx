import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
// import Products from "./pages/Products";
// import Industries from "./pages/Industries";
// import Exhibition from "./pages/Exhibition";
// import Download from "./pages/Download";
// import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
      <Navbar />
      
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;