
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import authService from './../../../services/auth.service'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Footer from './../../layout/footer/Footer'

import Archivo from './img/archive.png'
import Camera from './img/camera_.png'
import Questions from './img/question.png'

import './inicio.css'

class InicioUser extends Component {

    constructor(props) {
        super(props)
        this.authService = new authService()
    }

    logoutUser = () => {
        this.authService
            .logout()
            .then(() => this.props.setTheUser(null))
            .catch(err => console.log('error:', err))
    }

    render() {
        return (

                <>
        <div className ="inicioBackground">
        <Container>

        <h3> Bienvenido, {this.props.loggedInUser.username} </h3>
        <div className= "inicioIconsContainer"> 
        <Row>
            <Col xs={4}>
                <Link to="/archive"><img src={Archivo} alt="archive" className="inicioIconsImage"/></Link>
            </Col>
            <Col xs={8}>
                <div className="inicioText">
                    <h4>Ver sus archivos</h4>
                    <p>Puede ver todos los</p>
                    <p>documentos scaneados</p>
                </div>             
            </Col>
        </Row>
        <Row>
            <Col xs={4}>
                <Link to="/newDoc"><img src={Camera} alt="camera" className="inicioIconsImage"/></Link>
            </Col>
            <Col xs={8}>
                <div className="inicioText">
                    <h4>Scannear un DNI</h4>
                    <p>Tome una fotografía del </p>
                    <p>documento y se procesará</p>
                </div>            
            </Col>
        </Row>
        <Row>
            <Col xs={4}>
                <Link to="/help"><img src={Questions} alt="question" className="inicioIconsImage"/></Link>
            </Col>
            <Col xs={8}>
                <div className="inicioText">
                    <h4>¿Necesita Ayuda?</h4>
                    <p>Puede consultar las</p>
                    <p>preguntas frecuentes</p>
                </div>   
            </Col>
        </Row>
        </div>
    </Container>
</div>
        <Footer />
        </>
    )}
}

export default InicioUser






