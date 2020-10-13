import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DniServices from './../../../services/dni.services'
import ArchiveCard from './archiveCard'

//import textract from '../components/pages/edit/edit'

class ArchiveList extends Component{
    constructor() {
        super()
        this.state = {
            dniList: []
        }
        this.DniServices = new DniServices()
    }


componentDidMount = () => this.loadDni()

loadDni = () => {
    this.DniServices
        .getListDoc()
        .then(response => this.setState({ dniList: response.data }))
        .catch(err => console.log('Error:', err))
}

    render() {
        return (
            <>
            <Container>
                <main>
                    <h1>Listado de DNI's</h1>
                    <Row>
                        {this.state.dniList.map(elm => <ArchiveCard loggedInUser={this.props.loggedInUser} key={elm._id} {...elm} />)}      
                    </Row>
                </main>
            </Container>
            </>    
    )
        }
}
export default ArchiveList