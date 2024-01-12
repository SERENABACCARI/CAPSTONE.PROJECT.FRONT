import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import logo from '../immagini/DSC_7170.jpg';
import logo2 from '../immagini/VR-2165.jpg';
import logo3 from '../immagini/VR-1610.jpg';


function Home() {
    return (
        <div className="Home">
            <Carousel style={{ marginTop: '5rem' }}>
                <Carousel.Item>
                        <Container>
                        <h1 style={{ color: 'white' }}>Benvenuto!</h1>
                            <p>Un sogno che diventa un progetto.</p>
                        </Container>
                    <img className="foto" src={logo2} alt="First slide" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <Container>
                        <h1 style={{ color: 'white' }}  >Altro messaggio</h1>
                            <p>Descrizione del secondo slide.</p>
                        </Container>
                    <img className="foto2" src={logo} alt="Second slide" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <Container>
                        <h1 style={{ color: 'white' }}>Un terzo messaggio</h1>
                            <p>Descrizione del terzo slide.</p>
                        </Container>
                    <img className="foto3" src={logo3} alt="Third slide" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
    


export default Home;
