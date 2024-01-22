import '../App.css'
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
            { id: 0, image: image, text: "L’accesso alla finale è consentivo ai primi 6 classificati di ogni categoria alle gare di selezione 2023/2024" , title: "Selezione Trofeo PRO CARD"},
            { id: 1, image: image1, text: "Il posing è uno strumento per presentare voi stesse e la vostra condizione fisica durante una gara di bodybuilding", title: "Corso Posing Bikini" },
            { id: 2, image: image3, text: "PRO CARD IN PALIO, PREMIO BEST POSER e BEST ROUTINE", title: "Finale Trofeo PRO CARD" }
        ]
    };

    render() {
        return (
            <div className="About">
                <div className='container'>
                <h1 className='Gare'>Gare ed Eventi</h1>
                    <div className='row'>
                        {this.state.cards.map((card) => (
                            <Card  key={card.id} className=" col-4 ">
                                <Card.Img src={card.image} alt="" />
                                <Card.Body >
                                    <Card.Title style={{ color: 'white', fontFamily: "cursive" }}>{card.title}</Card.Title>
                                    <Card.Text style={{ color: 'white', fontFamily: "cursive" }}>
                                        {card.text}
                                    </Card.Text>
                                    {/* Utilizzo to per creare un collegamento alla pagina "Contact" */}
                                    <Link to="/Login">
                                        <Button className='Button'style={{ fontFamily: "cursive" }} >Iscriviti</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
