import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'


class Home extends Component {


  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {

    return (
      <div className="navbar">
        <Link to={"/"} className="App-logo" alt="logo">#</Link>

      </div>
    )
  }

}

export default Home;