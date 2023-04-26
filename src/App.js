import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetail from "./pages/BlogDetail";
import CarDetail from "./pages/CarDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Car from "./pages/Car";
import "./App.css";

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/blog/:title" element={<BlogDetail />} />
                    <Route path="/car/:name" element={<CarDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog/" element={<Blog />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/car" element={<Car />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
