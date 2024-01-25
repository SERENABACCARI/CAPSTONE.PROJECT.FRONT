import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Esegui la richiesta HTTP con fetch
            const response = await fetch('http://localhost:3020/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                //  in caso di errore
                console.error('Errore durante la richiesta:', response.status);
                return;
            }

            //  richiesta  andata a buon fine
            const data = await response.json();

            if (data.token) {
                // Correggi la chiave di localStorage (rimuovi i due punti)
                localStorage.setItem('userid', data.token);
                localStorage.setItem('token', data.token);

                // Puoi eseguire altre azioni qui, ad esempio, reindirizzare l'utente
            }

        } catch (error) {
            // Gestisci gli errori durante la richiesta
            console.error('Errore durante la richiesta:', error.message);
        }
    };

    return (
        <div className="login-container">
            <Form className="login" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login;
