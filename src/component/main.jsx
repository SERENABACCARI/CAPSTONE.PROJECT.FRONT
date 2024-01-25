import React, { useEffect } from 'react';
import Login from './login'; // Assicurati di importare il componente Login dal percorso corretto

function App() {
    useEffect(() => {
        const fetchDataAndSaveToLocalStorage = async () => {
            try {
                // Eseguo la richiesta HTTP con fetch
                const response = await fetch(`http://localhost:3020/api/users/${userid}`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token} ` 
                    },
                    body: JSON.stringify({ }),
                });

                if (!response.ok) {
                    
                    console.error('Errore durante la richiesta:', response.status);
                    return;
                }

               
                const data = await response.json();

                if (data.token) {
                    // Salvo i dati nel localStorage
                    localStorage.setItem('userid', data.token);
                    localStorage.setItem('token', data.token);

                   
                }

            } catch (error) {
                
                console.error('Errore durante la richiesta:', error.message);
            }
        };

        fetchDataAndSaveToLocalStorage(); 
    }, []); 

    return (
        <div>
            
            <Login />
        </div>
    );
}

export default App;
