
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DniService from '../../../services/dni.services'
import Container from 'react-bootstrap/Container'
import './showDoc.css'

class ShowDoc extends Component {
      constructor(props){
        super(props)
        this.state = {
            id:"",
            docType:"",
            docNumber:"",
            docName: "",
            docSurname: "",
            docGender: "",
            docNationality: "",
            docBirthDate: "",
            docBirthPlace: "",
            docAddress: "",
            docValidUntil: "",
            docDetails: "",
            imgURL: ""
          

        }
        this.DniService = new DniService()
      }

      componentDidMount = () => {
        this.DniService
            .getOneDoc(this.props.match.params.id)
            .then(response => this.setState(response.data))
            .catch(err => console.log('Error:', err))

    }

      handleInputChange = e => {
        const { name, value } = e.target
        this.setState({...this.state, [name] : value})
      }

      handleFormSubmit = e => {
        e.preventDefault()
        console.log("handleFormSubmit: ",this.state.id,this.state)
        this.DniService
            .editDoc(this.props.match.params.id,this.state)
            .then(() => this.props.history.push('/archive'))
            .catch(err => console.log('Error: ', { err }))
    }

    render(){

      return(
        <Container className="editForm">
        <Form onSubmit = {this.handleFormSubmit}>

            <Form.Group>
                  <Form.Label>Tipo de documento</Form.Label>
                  <Form.Control type="text" name="docType" value={this.state.docType} onChange={this.handleInputChange} />
            </Form.Group>

            <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="docName" value={this.state.docName} onChange={this.handleInputChange} />
            </Form.Group>

            <Form.Group>
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" name="docSurname" value={this.state.docSurname} onChange={this.handleInputChange} />
            </Form.Group>

            <Form.Group>
                    <Form.Label>Género</Form.Label>
                    <Form.Control type="text" name="docGender" value={this.state.docGender} onChange={this.handleInputChange} />
            </Form.Group>

            <Form.Group>
                    <Form.Label>Nacionalidad</Form.Label>
                    <Form.Control type="text" name="docNationality" value={this.state.docNationality} onChange={this.handleInputChange} />
            </Form.Group>

            <Form.Group>
                    <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control type="text" name="docBirthDate" value={this.state.docBirthDate} onChange={this.handleInputChange} />
            </Form.Group>

            <Form.Group>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" name="docAddress" value={this.state.docAddress} onChange={this.handleInputChange} />
            </Form.Group>

            <Form.Group>
                    <Form.Label>Válido hasta</Form.Label>
                    <Form.Control type="text" name="docValidUntil" value={this.state.docValidUntil} onChange={this.handleInputChange} />
            </Form.Group>

            <Form.Group>
                    <Form.Label>Observaciones</Form.Label>
                    <Form.Control as="textarea" name="docDetails" value={this.state.docDetails} onChange={this.handleInputChange} />
            </Form.Group>
            <Button variant="dark" type="submit">Actualizar</Button>


        </Form>
        </Container>
      )
    }

}

export default ShowDoc