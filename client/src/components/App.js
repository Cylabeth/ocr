
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navigation from './layout/navbar/Navbar'
import Footer from './layout/footer/Footer'

import Index from './pages/index/index'
//import CameraPic from './pages/photo/photo'
//import Historic from './pages/historic/historic'
import Login from './pages/login/login'
import NewDoc from './pages/photo/newDoc'
import ShowDoc from './pages/photo/showDoc'
import Archives from './pages/archive/archive'
import DocDetails from './pages/dniDetails/details'
import DocEdit from './pages/edit/edit'

//import Alert from './shared/alert/Alert'

import authService from '../services/auth.service'

import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: undefined
    }
    this.authService = new authService()
  }


  componentDidMount = () => this.fetchUser()

  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El usuario es', this.state.loggedInUser))

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(response => this.setState({ loggedInUser: response.data }))
      .catch(err => this.setState({ loggedInUser: null }))
  }

  render() {
    return (
      <>
        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />
        <Switch>
          <Route path = "/" exact render = {() => <Index />} />
          <Route path = "/login" exact render = {props => <Login setTheUser={this.setTheUser} {...props} />} />
          <Route path = "/newDoc" exact render = {props =>  <NewDoc {...props} />} />
          <Route path = "/showDoc/:id" exact render = {props =>  <ShowDoc {...props} />} />
          <Route path = "/archive" exact render = {props => <Archives />} />
          <Route path = "/details/:dni_id" exact render = {props => <DocDetails {...props} />} />
          <Route path = "/edit/:dni_id" exact render = {props => <DocEdit {...props} />} />



        </Switch>
        <Footer />
      </>
    )
  }
}

export default App;

