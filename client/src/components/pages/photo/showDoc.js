
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DniService from '../../../services/dni.services'
import Container from 'react-bootstrap/Container'
import Footer from './../../layout/footer/Footer'
//import Alert from './../../../shared/Alert'
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
            imgURL: "",
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
        this.setState({...this.state.dni, [name] : value})
      }

      handleFormSubmit = e => {
        e.preventDefault()
        this.DniService
            .editDoc(this.props.match.params.id,this.state)
            .then(() => this.props.history.push('/archive'))
            .catch(err => console.log('Error: ', { err }))
    }
 
    render(){

      return(
        <>
        <Container className="showDocContainer">
        <h2><i className="fa fa-save " aria-hidden="true"></i>_Guardar documento</h2>
        <main className = "showDoc input-icons">
                <Form onSubmit = {this.handleFormSubmit}>
                        <Form.Group className="has-feedback" style={{position: "relative"}}>
                                <Form.Label className="detailsLabelText">Tipo de documento: </Form.Label>
                                <Form.Control className = "formNoLineAndIcon" type="text" name="docType" value={this.state.docType} onChange={this.handleInputChange} /> <span className="fa fa-pencil" aria-hidden="true"></span>
                        </Form.Group>

                        <Form.Group className="has-feedback" style={{position: "relative"}}>
                                <Form.Label className="detailsLabelText">Número de DNI: </Form.Label>
                                <Form.Control className = "formNoLineAndIcon" type="text" name="docNumber"  value={this.state.docNumber} onChange={this.handleInputChange} /><span className="fa fa-pencil" aria-hidden="true"></span>
                        </Form.Group>

                        <Form.Group className="has-feedback" style={{position: "relative"}}>
                                <Form.Label className="detailsLabelText">Nombre: </Form.Label>
                                <Form.Control className = "formNoLineAndIcon" type="text" name="docName" value={this.state.docName} onChange={this.handleInputChange} /><span className="fa fa-pencil" aria-hidden="true"></span>
                        </Form.Group>

                        <Form.Group className="has-feedback" style={{position: "relative"}}>
                                <Form.Label className="detailsLabelText">Apellidos: </Form.Label>
                                <Form.Control className = "formNoLineAndIcon" type="text" name="docSurname" value={this.state.docSurname} onChange={this.handleInputChange} /><span className="fa fa-pencil" aria-hidden="true"></span>
                        </Form.Group>

                        <Form.Group className="has-feedback" style={{position: "relative"}}>
                                <Form.Label className="detailsLabelText">Género: </Form.Label>
                                <Form.Control className = "formNoLineAndIcon" type="text" name="docGender" value={this.state.docGender} onChange={this.handleInputChange} /><span className="fa fa-pencil" aria-hidden="true"></span>
                        </Form.Group>

                        <Form.Group className="has-feedback" style={{position: "relative"}}>
                                <Form.Label className="detailsLabelText">Nacionalidad: </Form.Label>
                                <Form.Control className = "formNoLineAndIcon" type="text" name="docNationality" value={this.state.docNationality} onChange={this.handleInputChange} /><span className="fa fa-pencil" aria-hidden="true"></span>
                        </Form.Group>

                        <Form.Group className="has-feedback" style={{position: "relative"}}>
                                <Form.Label className="detailsLabelText">Fecha de nacimiento: </Form.Label>
                                <Form.Control className = "formNoLineAndIcon" type="text" name="docBirthDate" value={this.state.docBirthDate} onChange={this.handleInputChange} /><span className="fa fa-pencil" aria-hidden="true"></span>
                        </Form.Group>

                        <Form.Group className="has-feedback" style={{position: "relative"}}>
                                <Form.Label className="detailsLabelText">Dirección: </Form.Label>
                                <Form.Control className = "formNoLineAndIcon" type="text" name="docAddress" value={this.state.docAddress} onChange={this.handleInputChange} /><span className="fa fa-pencil" aria-hidden="true"></span>
                        </Form.Group>

                        <Form.Group className="has-feedback" style={{position: "relative"}}>
                                <Form.Label className="detailsLabelText">Válido hasta: </Form.Label>
                                <Form.Control className = "formNoLineAndIcon" type="text" name="docValidUntil" value={this.state.docValidUntil} onChange={this.handleInputChange} /><span className="fa fa-pencil" aria-hidden="true"></span>
                        </Form.Group>

                        <Form.Group className="has-feedback" style={{position: "relative"}}>
                                <Form.Label className="detailsLabelText">Observaciones: </Form.Label>
                                <Form.Control className = "formNoLineAndIcon" as="textarea" name="docDetails" value={this.state.docDetails} onChange={this.handleInputChange} /><span className="fa fa-pencil" aria-hidden="true"></span>
                        </Form.Group>
                                
                        <div className="detailsButtonBox">
                                <Button className="detailsSubmitButton" type="submit">GUARDAR</Button>
                        </div>
                </Form>
        </main>
        </Container>
        <Footer />
        </>

        )}

} export default ShowDoc