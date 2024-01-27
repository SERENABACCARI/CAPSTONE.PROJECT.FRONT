
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');

        if (!userId || !token) {
            navigate('/login');
        } else {
            fetch(`http://localhost:3020/api/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((userData) => {
                    setUser(userData);
                })
                .catch(() => {
                    navigate('/login');
                });
        }
    }, [navigate]);

    return !user ? (
        <span>LOADING....</span>
    ) : (
        <div style={{color:"white"}}>Congratulations! Accesso avvenuto con successo {user}</div>
    );
}
