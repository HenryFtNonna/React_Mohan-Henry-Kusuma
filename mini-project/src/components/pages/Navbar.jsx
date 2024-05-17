import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faCommentsDollar, faTable, faMagnifyingGlass, faAddressCard, faRightFromBracket, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import spongebobImage from './images/spongebob.png';

library.add(faLandmark, faCommentsDollar, faTable, faMagnifyingGlass, faAddressCard, faRightFromBracket, faCommentDots);

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div>
            <div>
            <div className="hamburger" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>&#9776;</div>
            </div>
            
            <div className={`side-bar ${isSidebarOpen ? 'open' : ''}`} id="sidebar">
                <div className="user-p" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={spongebobImage} alt="Logo" />
                    <h4 className="mt-2 font-judul">DUITTT</h4>
                </div>
                <ul>
                    <li onClick={closeSidebar}>
                        <Link to="/dashboard">
                            <FontAwesomeIcon icon={faLandmark} />
                            <span className="ml-3">Dashboard</span>
                        </Link>
                    </li>
                    <li onClick={closeSidebar}>
                        <Link to="/table">
                            <FontAwesomeIcon icon={faCommentsDollar} />
                            <span className="ml-3">Tambah Data</span>
                        </Link>
                    </li >
                    <li onClick={closeSidebar}>
                        <Link to="/rekap-bulanan">
                            <FontAwesomeIcon icon={faTable} />
                            <span className="ml-3">Rekap Bulanan</span>
                        </Link>
                    </li>
                    <li onClick={closeSidebar}>
                        <Link to="/search">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <span className="ml-3">Search</span>
                        </Link>
                    </li>
                    <li onClick={closeSidebar}>
                        <Link to="/chat-bot">
                            <FontAwesomeIcon icon={faCommentDots} />
                            <span className="ml-3">Chat Bot</span>
                        </Link>
                    </li>
                    <li onClick={closeSidebar}>
                        <Link to="/about">
                            <FontAwesomeIcon icon={faAddressCard} />
                            <span className="ml-3">About</span>
                        </Link>
                    </li>
                    <li onClick={closeSidebar}>
                        <Link to="/logout">
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            <span className="ml-3">Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}