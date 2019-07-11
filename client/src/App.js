import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home"
import { Switch, Route } from 'react-router-dom'
import Header from './components/header'
import ProfileDetail from './components/profiledetail';
import axios from "axios"




class App extends Component {


  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      page: 1,
      profiles: [],
      detailProfile: {},
    }

    this.sendProfileDetail = (arg) => {
      this.setState({ detailProfile: arg })
    }

    this.sendQuyeryPage = (arg) => {
      this.setState({ loading: true, profiles: [], page: arg })
      this.chargeProfiles(arg)
    }

    this.chargeProfiles = (arg) => {
      if (arg === undefined) { arg = 1 }
      axios.get(`http://localhost:5000/api/${arg}`)
        .then(res => {
          this.setState({ loading: false, profiles: res.data })
          console.log(res.data)
        })
        .catch(err => console.log("Got an error", err))
    }
  }

  componentDidMount() {
    this.chargeProfiles()
  }

  render() {

    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/" exact render={() => <Home profiles={this.state.profiles} loading={this.state.loading} sendProfileDetail={(arg) => this.sendProfileDetail(arg)} sendQuyeryPage={(arg) => this.sendQuyeryPage(arg)} />} />
          <Route path="/detail" exact render={() => <ProfileDetail profile={this.state.detailProfile} />} />
        </Switch>
      </div>
    )
  }

}

export default App;
