import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Regolamento() {
    const [open, setOpen] = useState(false);

    return (
        <div style={{ marginTop: "10rem" }}>
            <h1>REGOLAMENTO</h1>
            <h2>PRIMA DI PARTECIPARE:</h2>
            <p>Le gare di Selezione e la Finale BBFN sono aperte a tutti gli atleti natural che aderiscono al REGOLAMENTO sottostante,
                alla POLITICA ANTIDOPING ed in regola con il TESSERAMENTO annuale.
            </p>

            <div className='container'>

                <>
                    <Button className='Button'
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        MODALITA E TEMPISTICA DI ISCRIZIONE ATLETI
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            Per poter gareggiare in una delle competizioni BBFN bisogna essere regolarmente affiliati alla BBFN,
                            versando la quota associativa annuale pari a € 25, unitamente al contributo Antidoping pari a € 75,
                            previa compilazione della Richiesta di Affiliazione.
                            La tessera associativa ha validità fino al 31 dicembre dell’anno in cui è stata emessa.
                            Il termine d’iscrizione alle competizioni è di UNA settimana prima della data di svolgimento.
                            Gli atleti per poter prendere parte alle competizioni BBFN devono essere in possesso di un
                            certificato medico AGONISTICO in corso di validità,
                            da inviare tramite email.
                            Qualora l’atleta non presenti la certificazione medica richiesta, entro il giorno della gara, il Consiglio Direttivo può decidere di escluderlo dalla partecipazione all’evento.
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
                    >
                        ACCOMPAGNATORI
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            Per poter partecipare alle gare BBFN in veste di accompagnatore di un atleta bisogna essere regolarmente affiliati, versando la quota associativa annuale pari a € 25, previa compilazione della Richiesta di Affiliazione.
                            La tessera associativa ha validità fino al 31 dicembre dell’anno in cui è stata emessa e consente di accedere al back stage di tutte le gare fino alla sua scadenza.
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
                    >
                        CATEGORIE E COSTI
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            CATEGORIE AD ETA’:
                            Per le categorie suddivise per età ( Junior e Master) è da considerarsi solamente l’anno di nascita e non la data completa.
                            Per comprendere se si rientra ad esempio nella categoria Bikini Junior fino a 23anni, basterà sottrarre 23 all’anno in corso ed i nati entro quell’anno rientrano nella categoria.
                            Nel dettaglio considerando come anno in cui gareggiare il 2023:

                            BB Junior -23 (fino al 2000)
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
                    >
                        ASSEGNAZIONE PRO CARD
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            vincitori dei Titoli Assoluti maschili e femminili di tutte le categorie delle Finali Italiane riceveranno la Pro Card.
                            Inoltre la giuria assegnerà la Pro Card anche agli atleti che verranno reputati meritevoli
                        </div>
                    </Collapse>
                </>
            </div>
        </div>
    );
}

export default Regolamento;
