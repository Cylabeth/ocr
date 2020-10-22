import React from 'react'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Container'
import Footer from './../../layout/footer/Footer'

import './help.css'

const Help = () => {
    return (

        <>
        <Container className="helpStyle">
            <h2><i className="fa fa-question" aria-hidden="true"></i>_Preguntas frecuentes</h2>
            <Accordion style={{paddingBottom: "50px"}}>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "#002561",textDecoration: "none"}}>
                        1. ¿Qué es OCR?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        Un OCR (Optical Character Recognition) 
                        es un sistema computarizado de análisis que 
                        permite escanear un documento de texto en un 
                        fichero automatizado electrónicamente, 
                        que se puede editar con un procesador de 
                        textos en el ordenador.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{color: "#002561",textDecoration: "none"}}>
                        2. ¿Cómo funciona?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        Lorem fistrum hasta luego Lucas benemeritaar 
                        pecador hasta luego Lucas papaar papaar condemor 
                        papaar papaar te va a hasé pupitaa tiene musho 
                        peligro a wan. Pupita ese que llega llevame al 
                        sircoo no puedor amatomaa te va a hasé pupitaa. 
                        Pecador amatomaa mamaar papaar papaar pupita 
                        tiene musho peligro ese pedazo de qué dise usteer
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{color: "#002561",textDecoration: "none"}}>
                        3. ¿Qué tipo de documentos puedo scanear?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                        Caballo blanco caballo negroorl amatomaa a wan a wan.
                        Torpedo no te digo trigo por no llamarte Rodrigor se 
                        calle ustée pecador jarl pecador no te digo trigo por 
                        no llamarte Rodrigor. No te digo trigo por no llamarte 
                        Rodrigor ese pedazo de la caidita te va a hasé pupitaa 
                        de la pradera ahorarr. Ahorarr no puedor llevame al 
                        sircoo fistro.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{color: "#002561",textDecoration: "none"}}>
                        4. ¿Qué pasa con los archivos subidos?    
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                        Llevame al sircoo va usté muy cargadoo quietooor 
                        se calle ustée me cago en tus muelas se calle ustée 
                        a peich apetecan caballo blanco caballo negroorl 
                        apetecan al ataquerl.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="4" style={{color: "#002561",textDecoration: "none"}}>
                        5. ¿Se pueden modificar las entradas?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                        Llevame al sircoo diodeno ese hombree sexuarl 
                        te va a hasé pupitaa. Benemeritaar mamaar caballo 
                        blanco caballo negroorl va usté muy cargadoo 
                        a gramenawer no puedor. Pecador no te digo trigo
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="5" style={{color: "#002561",textDecoration: "none"}}>
                        6. ¿Cuál es el significado de la vida?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>
                        Rodrigor ese que llega diodeno a wan al ataquerl 
                        papaar papaar ese pedazo de por la gloria de mi madre 
                        qué dise usteer. Papaar papaar pupita ahorarr papaar 
                        papaar por la gloria de mi madre papaar papaar te voy 
                        a borrar el cerito apetecan llevame al sircoo ese pedazo 
                        de jarl. A gramenawer me cago en tus muelas papaar papaar 
                        jarl. 
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
            </Accordion>
        </Container>
        <Footer />
        </>
    )
}

export default Help