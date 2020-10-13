import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Helmet } from 'react-helmet'
import background from './backgroundRodex2.jpg'
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
            <img src={logo} className="logo" />
            <Link to="/login">
                <p className="index-button">INGRESAR</p>
            </Link>
        </Container>
        </div>
    )
}

export default Index