import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Regolamento() {
    const [open, setOpen] = useState(false);

    return (
        <div style={{ marginTop: "10rem" }}>
            <h1>REGOLAMENTO</h1>
            <h1>Prima di partecipare:</h1>
            <p>Le gare di Selezione e la Finale BBFN sono aperte a tutti gli atleti natural che aderiscono al REGOLAMENTO sottostante,
                alla POLITICA ANTIDOPING ed in regola con il TESSERAMENTO annuale.
            </p>

            <div className='container'>

                <>
                    <Button className='Button'
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        variant="outline-danger"
                    >
                        <h1>MODALITA E TEMPISTICA DI ISCRIZIONE ATLETI</h1>
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            <p>Per poter gareggiare in una delle competizioni BBFN bisogna essere regolarmente affiliati alla BBFN,
                                versando la quota associativa annuale pari a € 25, unitamente al contributo Antidoping pari a € 75,
                                previa compilazione della Richiesta di Affiliazione.
                                La tessera associativa ha validità fino al 31 dicembre dell’anno in cui è stata emessa.
                                Il termine d’iscrizione alle competizioni è di UNA settimana prima della data di svolgimento.
                                Gli atleti per poter prendere parte alle competizioni BBFN devono essere in possesso di un
                                certificato medico AGONISTICO in corso di validità,
                                da inviare tramite email.</p>

                        </div>
                    </Collapse>
                </>
            </div>

            <div className='container'>

                <>
                    <Button className='Button'
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        variant="outline-danger"
                    >
                        <h1>ACCOMPAGNATORI</h1>
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            <p>Per poter partecipare alle gare BBFN in veste di accompagnatore di un atleta bisogna essere regolarmente affiliati, versando la quota associativa annuale pari a € 25, previa compilazione della Richiesta di Affiliazione.
                                La tessera associativa ha validità fino al 31 dicembre dell’anno in cui è stata emessa e consente di accedere al back stage di tutte le gare fino alla sua scadenza.</p>
                        </div>
                    </Collapse>
                </>
            </div>

            <div className='container'>

                <>
                    <Button className='Button'
                        onClick={() => setOpen(!open) }
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        variant="outline-danger"
                    >
                        <h1> CATEGORIE E COSTI</h1>
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            <p><li><ul>BB Junior -23 (fino al 2000)
                                BB Master +40 (fino al 1983)
                                BB Grand Master +50 (fino al 1973)
                                BB Grand Master +60 (fino al 1963)
                                Man Physique Master +40 (fino al 1983)
                                Man Physique Junior -23 (fino al 2000)
                                Figure +40 (fino al 1983)
                                Figure +50 (fino al 1973)
                                Bikini Master +35 (fino al 1988)
                                Bikini GrandMaster +42 (fino al 1981)
                                Bikini Junior -23 (fino al 2000)
                            </ul></li></p>



                        </div>
                    </Collapse>
                </>
            </div>
            <div className='container'>

                <>
                    <Button className='Button'
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        variant="outline-danger"

                    >
                        <h1>ASSEGNAZIONE PRO CARD</h1> 
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            <p>vincitori dei Titoli Assoluti maschili e femminili di tutte le categorie delle Finali Italiane riceveranno la Pro Card.
                                Inoltre la giuria assegnerà la Pro Card anche agli atleti che verranno reputati meritevoli</p> 
                        </div>
                    </Collapse>
                </>
            </div>
        </div>
    );
}

export default Regolamento;
