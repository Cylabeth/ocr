import React, { Component } from 'react'
import { Link , withRouter} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import authService from './../../../services/auth.service'
import home from './home.png'
import './Navbar.css'

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.authService = new authService()
    }

    logoutUser = () => {
        this.authService
            .logout()
            .then(() => this.props.setTheUser(null))
            .then(() => this.props.history.push('/'))
            .catch(err => console.log('error:', err))
    }

    render() {
        return (
            <Navbar className="navbar-custom shadow" variant="dark" expand="lg" style={{ marginBottom: '0px' }}>
                <Link to="/user">
                    <Navbar.Brand>
                        <img
                            alt="Home"
                            src={home}
                            width="40"
                            height="31"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav">

                <i className="fa fa-user" aria-hidden="true"></i> 

                </Navbar.Toggle>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style={{display:"flex"}}>
                        <Link className="nav-link" to="/profile"> Hola, {this.props.loggedInUser ? this.props.loggedInUser.username : 'invitado'}</Link>

                        {!this.props.loggedInUser && <Link className="nav-link" to="/login" >Acceder</Link>}
                        {this.props.loggedInUser && <div className="nav-link" onClick={this.logoutUser}>Cerrar sesión</div>}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default withRouter(Navigation)
/*

                        <Link className="nav-link" to="/">Inicio</Link>
                        <Link className="nav-link" to="/archive">Archivos</Link>
                        <Link className="nav-link" to="/newDoc">Camara</Link>
                        (login)
                          <Link className="nav-link" to="/profile"> Hola, {this.props.loggedInUser ? this.props.loggedInUser.username : 'invitado'}</Link>
                        


*/