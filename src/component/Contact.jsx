import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Contact() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [confirmationMessage, setConfirmationMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //invio del form con onSubmit

        console.log("Name:", name);
        console.log("Last Name:", lastName);
        console.log("Phone Number:", phoneNumber);
        console.log("Message:", message);

        // Set the confirmation message
        setConfirmationMessage("Form submitted successfully!");
    };

    return (
        <div className="contact">
            <h1 className='contact-title'>Contact</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="+390050505494893" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicComments">
                    <Form.Label>Messages</Form.Label>
                    <Form.Control as="textarea" placeholder="Leave a message here" value={message} onChange={(e) => setMessage(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit" className='Button'>
                    Submit
                </Button>

                {confirmationMessage && (
                    <p style={{ marginTop: '10px', color: 'green' }}>
                        {confirmationMessage}
                    </p>
                )}
            </Form>
        
            
        </div>
    );
}

export default Contact;



//SE VOGLIO FARLO CON FETCH

///import React, { useState } from 'react';
//import { Form, Button } from 'react-bootstrap';

//function Contact() {
   // const [name, setName] = useState("");
   // const [lastName, setLastName] = useState("");
   // const [phoneNumber, setPhoneNumber] = useState("");
   // const [message, setMessage] = useState("");
   // const [confirmationMessage, setConfirmationMessage] = useState("");

    //const handleSubmit = async (e) => {
       // e.preventDefault();

        // Crea un oggetto con i dati del modulo
       // const formData = {
           // name,
           // lastName,
           // phoneNumber,
          //  message
        //};

       // try {
            // Invia i dati al server utilizzando la Fetch API
           // const response = await fetch('URL_DEL_TUO_SERVER', {
                //method: 'POST',
                //headers: {
                 //   'Content-Type': 'application/json',
               // },
               // body: JSON.stringify(formData),
            //});

           // if (response.ok) {
                // Se la risposta è positiva, imposta il messaggio di conferma
               // setConfirmationMessage("Form submitted successfully!");
           // } else {
                // Se la risposta non è positiva, gestisci l'errore
                //setConfirmationMessage("Error submitting the form. Please try again.");
            //}
        //} catch (error) {
            // Gestisci eventuali errori durante la richiesta
            //console.error("Error:", error);
           // setConfirmationMessage("Error submitting the form. Please try again.");
       // }
   // };

   // return (
        //<div className="contact">
           // <h1>Contact</h1>
          //  <Form onSubmit={handleSubmit}>
              //  {/* ... (rest of the form fields) */}

                //<Button variant="primary" type="submit">
                  //  Submit
               // </Button>

               // {confirmationMessage && (
                   // <p style={{ marginTop: '10px', color: confirmationMessage.includes('successfully') ? 'green' : 'red' }}>
                   //     {confirmationMessage}
                   // </p>
                //)}
            //</Form>
        //</div>
   // );
//}

//export default Contact;
