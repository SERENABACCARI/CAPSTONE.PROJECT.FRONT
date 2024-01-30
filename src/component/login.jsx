import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        /* debugger*/

        const response = await fetch(`http://localhost:3020/api/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();
        if (data.token) {
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('token', data.token);
        }

        navigate('/main');
    };

    return (
           <div><h2 className='login-title'>Login</h2>
        <div className="login-container">
           
            <Form className="login" onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                
                    <Button className='Button' type="submit">
                    Login
                </Button>
                

            </Form>
           </div>
        </div>
    );
}

export default Login;
