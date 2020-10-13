
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import DniService from './../../../services/dni.services'
import './edit.css'

class DocEdit extends Component {
    constructor() {
        super()
        this.state = {
          dni: {

          }
        }
        this.DniService = new DniService()
    }

    render() {

        return (
            <Container>
                <main className = "details">
                
                    <h2>{this.state.docType}</h2>
                    <hr />
                    <p>Número de DNI: {this.state.docNumber}</p>
                    <p>Nombre: {this.state.docName}</p>
                    <p>Apellido: {this.state.docSurname}</p>
                    <p>Género: {this.state.docGender}</p>
                    <p>Nacionalidad: {this.state.docNationality}</p>
                    <p>Lugar de nacimiento: {this.state.docBirthPlace}</p>
                    <p>Fecha de nacimiento: {this.state.docBirthDate}</p>
                    <p>Domicilio: {this.state.docAddress}</p>
                    <p>Válido hasta: {this.state.docValidUntil}</p>
                    <p>Observaciones: {this.state.docDetails}</p>
                    
                    <Link to={`/archive`} className="btn btn-dark btn-sm">Volver</Link>

                </main>
            </Container>
        )
    }

}
export default DocEdit
