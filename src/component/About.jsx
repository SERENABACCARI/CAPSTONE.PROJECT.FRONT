import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import image from "../event.card/2.jpg";
import image1 from "../event.card/3.jpg";
import image3 from "../event.card/1.JPG";

class About extends React.Component {
    state = {
        cards: [
            { id: 0, image: image1, text: "Il posing è uno strumento per presentare voi stesse e la vostra condizione fisica durante una gara di bodybuilding", title: "CORSO POSING" },
            { id: 1, image: image, text: "L’accesso alla finale è consentito ai primi 6 classificati di ogni categoria alle gare di selezione 2023/2024", title: "SELEZIONE TROFEO PRO CARD" },
            { id: 2, image: image3, text: "PRO CARD IN PALIO, PREMIO BEST POSER e BEST ROUTINE", title: "FINALE TROFEO PRO CARD" }
        ]
    };

    render() {
        return (
            <div className="About">
                <div className='containerGare'>
                    <h1 className='Gare'>Competitions and Events</h1>

                    <div className='row'>
                        {this.state.cards.map((card) => (
                            <div key={card.id} className="col-12">
                                <Card style={{ backgroundColor: "transparent", borderColor: "transparent" }}>
                                    <div className="row" style={{ marginBottom: "3rem" }}>
                                        <div className="col-12 col-md-6">
                                            {/* Immagine */}
                                            <Card.Img className='cardimage' src={card.image} alt="" />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Testo */}
                                            <Card.Body>
                                                <Card.Title style={{ fontFamily: "'Playfair Display', serif" }}>{card.title}</Card.Title>
                                                <Card.Text>
                                                    {card.text}
                                                </Card.Text>
                                                <Link to="/Regolamento">
                                                    <Button className='Button' variant="outline-danger">Iscriviti</Button>
                                                </Link>
                                            </Card.Body>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        );
    }
}

export default About;
