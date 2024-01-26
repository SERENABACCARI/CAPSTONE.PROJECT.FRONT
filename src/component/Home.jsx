import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import logo from '../immagini/DSC_7170.jpg';
import logo2 from '../immagini/L.JPG';
import logo3 from '../immagini/VR-1610.jpg';

function Home() {
    return (
        <div className="Home">
            <Carousel style={{ marginTop: '5rem' }}>
                <Carousel.Item>
                    <Container>
                        <div className="content">
                            <img className="foto" src={logo3} alt="First slide" />
                        </div>
                        <Carousel.Caption>
                            <div className="text">
                                <h1 style={{ color: 'white' }}>Benvenuto!</h1>
                                <p>Un sogno che diventa un progetto.</p>
                            </div>
                        </Carousel.Caption>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <div className="content">
                            <img className="foto2" src={logo} alt="Second slide" />
                            <Carousel.Caption>
                                <div className="text">
                                    <h1 style={{ color: 'white' }}>NaturalBodyBuilding</h1>
                                    <p>È miglioramento fisico e prestazionale ottenuto attraverso lo studio, la dedizione, la pazienza e la programmazione allenante rispettando
                                        la natura fisiologica dell’essere umano SENZA l’uso di sostanze che ne amplifichino le potenzialità.</p>
                                </div>
                            </Carousel.Caption>
                        </div>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <div className="content">
                            <img className="foto3" src={logo2} alt="Third slide" />
                            <Carousel.Caption>
                                <div className="text">
                                    <h1 style={{ color: 'white' }}>Unisciti Noi</h1>
                                    <p>Se sei un appassionato e ti piace portare ciò che fai sul palco, ti aspettiamo a uno dei nostri eventi.</p>
                                </div>
                            </Carousel.Caption>
                        </div>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Home;
