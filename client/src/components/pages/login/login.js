import React, { Component } from 'react'
//import { Redirect } from 'react-router-dom'
//import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Helmet } from 'react-helmet'
import authService from '../../../services/auth.service'
//import background from './backgroundLogin.jpg'
import './login.css'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.authService = new authService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        console.log(this.props)
        e.preventDefault()

        this.authService
            .login(this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/user') //('/newDoc')
                //this.props.history.go('/newDoc')
                
            })
            .catch(err => console.log('Error:', { err }))
    }

    render() {

        return (
            <div className="loginBackground pseudobody">
            <Container>
                <Helmet>
                <style type="text/css">
                {`.navbar {
                    display: none} 
                `}
                </style>
                </Helmet>
                <main className="loginform">
                    <Row className="justify-content-center">
                        <Col md={{ span: 5 }}>
                            <h1>Inicio de sesión</h1>
                            <Form onSubmit={this.handleFormSubmit}>
                                <Form.Group>
                                    <Form.Label>Nombre de usuario</Form.Label>
                                    <Form.Control  className="round-border" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control  className="round-border" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                </Form.Group>
                         
                                <Button variant="dark" type="submit" className="login-button" >Acceder</Button>
                                
                            </Form>
                        </Col>
                    </Row>
                </main>
            </Container>
            </div>
        )
    }
}

export default Login