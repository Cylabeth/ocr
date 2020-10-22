import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import { Helmet } from 'react-helmet'

import logo from './rodex-log.png'
import './index.css'
const Index = () => {
    return (
            <div className="indexBackground pseudobody">
                <Container>
                        <Helmet>
                            <style type="text/css">
                                {`.navbar {
                                    display: none} 
                                `}
                            </style>
                        </Helmet>
                        <div className="indexlogoContainer">    
                            <img src={logo} alt="logo Rodex" className="logo" />
                        </div>    
                        <div className="indexText">
                           <p>Reconocimiento Óptico</p>
                            <p>de documentos de identidad</p>
                        </div>
                        <div>    
                            <Link to="/login">
                                <p className="indexButton">INGRESAR</p>
                            </Link>
                        </div>    
                </Container>
            </div>
            )
}

export default Index