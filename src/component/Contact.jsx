// ContactsPage.js
import React, { useState } from 'react';

function ContactsPage() {
    const [contacts, setContacts] = useState([
        { id: 1, name: 'John Doe', location: 'CityA', email: 'john@example.com', phone: '555-1234' },
        { id: 2, name: 'Jane Doe', location: 'CityB', email: 'jane@example.com', phone: '555-5678' },
        // Aggiungi altri contatti secondo necessità
    ]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleContactSubmit = (e) => {
        e.preventDefault();

        // Validazione dei campi
        if (!name || !email || !phone) {
            alert("Inserisci tutti i campi.");
            return;
        }

        // Aggiungi il nuovo contatto alla lista
        setContacts([...contacts, { id: contacts.length + 1, name, location: '', email, phone }]);

        // Resetta i campi del form
        setName("");
        setEmail("");
        setPhone("");
    };

    return (
        
        <div className="contacts-page">
            <h2 className='contatti'>Contatti</h2>
            <div className='containercontact'>
            <div className="contacts-list">
                
                    <div  className="contact">
                        
                        <p>Location: asd bbfn Via Roma 8 </p>
                        <p>Email: www.BodyBuildingFederationNatural.com </p>
                        <p>Phone: +69-000-000</p>
                    </div>
                
                </div>
            </div>

            <div className="contact-form">
                <h2>Vuoi essere contattato?</h2>
                <form onSubmit={handleContactSubmit}>
                    <label>
                        Nome:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Telefono:
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </label>
                    <br />
                    <button className='Button' type="submit">Invia richiesta di contatto</button>
                </form>
            </div>
        </div>
    );
}

export default ContactsPage;
