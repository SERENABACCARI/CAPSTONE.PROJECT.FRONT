import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

    }

    return (
        <div className="login-container" >
            <Form className="login" onSubmit={handleSubmit}>
                <Form.Group  className="mb-3" controlId="formGroupEmail">
                    
                    <Form.Control  type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    
                    <Form.Control  type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login;
