import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');

        if (!userId || !token) {
            navigate('/Registrazione');
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
                    navigate('/Registrazione');
                });
        }
    }, [navigate]);

    

    return !user ? (
        <span>LOADING....</span>
    ) : (
        <div style={{ marginTop: "20rem" }}>
            <h1>Congratulazioni! Registrazione avvenuta con successo!</h1>
            <p>Email: {user.email}</p>
        </div>
    );
    }
