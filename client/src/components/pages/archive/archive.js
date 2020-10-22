import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Footer from './../../layout/footer/Footer'
import DniServices from './../../../services/dni.services'
import ArchiveCard from './archiveCard'
import Search from './../../layout/searchbar/SearchBar'
import Alert from '../../../shared/Alert'
import './archive.css'

//import textract from '../components/pages/edit/edit'

class ArchiveList extends Component{
    constructor() {
        super()
        this.state = {
            dniList: [],
            dniListFiltered: [],
            saveNewDoc: false,
            toastMessage: ""
        }
        this.DniServices = new DniServices()
    }


    componentDidMount = () => this.loadDni()

    setToast = (message) => this.setState({...this.state,saveNewDoc: !this.state.saveNewDoc, toastMessage: message})

    componentDidUpdate(prevProps, prevState) {
        console.log("prevState.dniListFiltered: ", prevState.dniListFiltered)
        console.log("this.state.dniListFiltered: ", this.state.dniListFiltered)
        if (prevState.dniListFiltered.length === 0 || prevState.dniListFiltered.length === this.state.dniListFiltered.length ){

            console.log("no pasa na")
        }
        else {

        if (prevState.dniListFiltered > this.state.dniListFiltered){
                this.setToast("Se ha borrado un documento")

        }
        else if (this.state.dniListFiltered > prevState.dniListFiltered  ) {
            this.setToast("Se ha agregado un documento")}

        }
        
    }

    loadDni = () => {
        this.DniServices
            .getListDoc()
            .then(response => this.setState({ dniList: response.data, dniListFiltered: response.data }))
            .catch(err => console.log('Error:', err))
    }

    //buscar por DNI
    searcher = valor => {
        let { value } = valor.target
        this.setState(({dniListFiltered: this.state.dniList.filter(elm => elm.docNumber.includes(value.toUpperCase()))}))
    }

    removeDNI = id =>{
        this.DniServices
            .deleteDoc(id)
            .then(() => this.loadDni() )
            .catch(err => console.log('Error:', err))
    }
    

    render() {
        return (
            <>
            <Container className="archiveStyle">
                <main>
                    <h2><i className="fa fa-file-text-o" aria-hidden="true"></i>_Archivo</h2>
                    <Search searcher={valor => this.searcher(valor)}/>
                    <hr></hr>
                    <ListGroup variant="flush" className="archiveScroll">
                        {this.state.dniListFiltered.map(elm => <ArchiveCard loggedInUser={this.props.loggedInUser} key={elm._id} remove={() => this.removeDNI(elm._id)} {...elm} />)}

                    </ListGroup>
                    {this.state.saveNewDoc === true && <Alert title= {this.state.toastMessage} />}
                </main>
            </Container>
            <Footer />
            </>    
    )
        }
}
export default ArchiveList


/*
  <Search searcher={valor => this.searcher(valor)}/>
 import React from 'react'
 import Form from 'react-bootstrap/Form'
 import FormControl from 'react-bootstrap/FormControl'


 const Search = ({searcher, filterCheck}) => {
     return (
         <>
             <Form  inline onChange={searcher}>
                 <FormControl type="text" placeholder="Search" className="mr-sm-2" />
             </Form>
 
         </>
     )
 }

 export default Search 


*/