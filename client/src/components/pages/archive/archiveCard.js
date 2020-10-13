import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ArchiveCard = ({_id, docType,docNumber,docName,docSurname}) => {

    return(
        <Card>
            <Card.Header as="h5">{docSurname},{docName} </Card.Header>
                <Card.Body>
                    <Card.Title>{docType}</Card.Title>
                        <Card.Text>
                            {docNumber}
                        </Card.Text>
                        <Button variant="secondary" size="sm">Editar</Button>
                        <Button variant="secondary" size="sm">Borrar</Button>
                        <Link to={`details/${_id}`} className="btn btn-dark btn-sm">Detalles</Link>
                </Card.Body>
        </Card>

    )

}

export default ArchiveCard
