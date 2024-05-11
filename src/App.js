import React from "react"
import {Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import Services from './pages/Services';
import Achievements from './pages/Achievements';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Mentionslegales from './pages/Mentions-legales'

import Nav from './components/Nav'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="App"  >
            <Nav />

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/services" element={<Services/>}></Route>
                <Route path="/achievements" element={<Achievements/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/mentions-legales" element={<Mentionslegales/>}></Route>
            </Routes>

            <Footer />

        </div>
    )
}