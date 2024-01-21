import React, { useState } from 'react';

function Registration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleRegistration = () => {
        // Implement your registration logic here
        // You can send a request to your backend for registration
        // Validate input, check if passwords match, etc.
        console.log('Registration data:', { username, password, confirmPassword });
    };

    return (
        <div>
                <h1>Benvenuto!!!</h1>
                <h1>Sei un nuov utente?effettua la registrazione!</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <label>Username:</label>
                        <input type="text" value={username} onChange={handleUsernameChange} />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-6'>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-6'>
                        <label>Confirm Password:</label>
                        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-6'>
                        <button onClick={handleRegistration}>Register</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Registration;


