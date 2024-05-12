import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Logika logout di sini
        localStorage.removeItem('isLoggedIn');
        navigate('/');
    }, [navigate]);

    return null;
}
