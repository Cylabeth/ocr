import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


const Search = ({searcher}) => {
    return (
        <>
            <Form  inline onChange={searcher}>
                <FormControl type="text" placeholder="Búsqueda por DNI" className="mr-sm-2" />
            </Form>

        </>
    )
}

export default Search 