
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registrazione() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const response = await fetch(`https://capstone-project-jaja.onrender.com/api/users/Registrer`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });



        const data = await response.json();
        if (data.token) {
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('token', data.token);
        }

        navigate('/mainRegistrer');
    };

    return (
        <div>
            <h1 style={{ marginTop: '15rem' }}>Registrer</h1>
            <div className="Register-container">
                <Form className="Register" onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
                        <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Form.Group>
                    <Button className='Button' variant="outline-danger" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Registrazione;
