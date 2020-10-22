import React, { Component } from 'react'
import Toast from 'react-bootstrap/Toast'
import './Alert.css'
//import logo from './logo.png'

export default class Alert extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
    }

    render() {

        return (

            <Toast
                onClose={() => this.setState({ visible: false })} show={this.state.visible} delay={4000} autohide className="alertStyle"
          
            >
                <Toast.Header>
                    <img
                        src=""
                        className="rounded mr-2"
                        alt=""
                        style={{ width: 20 }}
                    />
                    <strong className="mr-auto">{this.props.title}</strong>
                </Toast.Header>
                <Toast.Body>{this.props.text}</Toast.Body>
            </Toast>
        )
    }
}