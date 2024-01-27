import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import logo from '../immagini/DSC_7170.jpg';
import logo2 from '../immagini/L.JPG';
import logo3 from '../immagini/VR-1610.jpg';
import { Link } from 'react-router-dom';

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
                            
                        </Carousel.Caption>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <div className="content">
                            <img className="foto2" src={logo} alt="Second slide" />
                            <Carousel.Caption>
                                
                            </Carousel.Caption>
                        </div>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <div className="content">
                            <img className="foto3" src={logo2} alt="Third slide" />
                            <Carousel.Caption>
                                
                            </Carousel.Caption>
                        </div>
                    </Container>
                </Carousel.Item>
            </Carousel>

            {/* Contenuto sotto il carosello */}
            <Container className='prova'>
                <div className='prova2'>
                    <div className='row'>
                        <div className='row'>
                            <h1>Benvenuto!</h1>
                            <p>Un sogno che diventa un progetto.</p>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Altri elementi sotto il carosello */}
            <Container className='prova'>
                <div className='prova2'>
                    <div className='row'>
                        <div className='row'>
                            <h1>NaturalBodyBuilding</h1>
                            <p>È miglioramento fisico e prestazionale ottenuto attraverso lo studio, la dedizione, la pazienza e la programmazione allenante rispettando
                                la natura fisiologica dell’essere umano SENZA l’uso di sostanze che ne amplifichino le potenzialità</p>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Altri elementi sotto il carosello */}
            <Container className='prova'>
                <div className='prova2'>
                    <div className='row'>
                        <div className='row'>
                            <Link to="/About"><h1>Unisciti a Noi!</h1></Link>
                            <p>Se sei un appassionato e ti piace portare ciò che fai sul palco, ti aspettiamo a uno dei nostri eventi.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

        
    );

}

export default Home;
