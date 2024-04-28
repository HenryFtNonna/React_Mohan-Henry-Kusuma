// header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("Home");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        alert("Welcome");
    }, []); 

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <ul className="nav nav-pills mr-auto">
                        <b>Simple header</b>
                    </ul>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className={`nav-link ${activeTab === "Home" ? "active" : ""}`} onClick={() => handleTabClick("Home")}  to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === "Features" ? "active" : ""}`} onClick={() => handleTabClick("Features")} href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === "Pricing" ? "active" : ""}`} onClick={() => handleTabClick("Pricing")} href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === "FAQs" ? "active" : ""}`} onClick={() => handleTabClick("FAQs")} href="#">FAQs</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === "About" ? "active" : ""}`} onClick={() => handleTabClick("About")} href="#">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;