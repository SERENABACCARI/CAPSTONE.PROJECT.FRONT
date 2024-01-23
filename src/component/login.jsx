import React from 'react';
import {Button} from "react-bootstrap"
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
    
} from 'mdb-react-ui-kit';

function App() {
    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100">
            <MDBContainer className="p-4" style={{ maxWidth: '400px' }}>
                <h1 className='Login mb-4'>Login</h1>
                <MDBInput label='Email address' id='form1' type='email' />
                <MDBInput wrapperClass='mb-2' label='Password' id='form2' type='password' />

                <div className="d-flex justify-content-between mx-3 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                </div>

                <Button variant="primary" type="submit" className='Button'>
                    Sign in
                </Button>

                <div className="text-center mt-3">
                    <p>Not a member? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>

                    <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='facebook-f' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='twitter' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='google' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='github' size="sm" />
                        </MDBBtn>
                    </div>
                </div>
            </MDBContainer>
        </div>
    );
}

export default App;
