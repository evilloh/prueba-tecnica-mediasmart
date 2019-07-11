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
      <div className="footer">

        <p onClick={() => this.props.sendQuyeryPage(1)}>1</p>
        <p onClick={() => this.props.sendQuyeryPage(2)}>2</p>
        <p onClick={() => this.props.sendQuyeryPage(3)}>3</p>
        <p onClick={() => this.props.sendQuyeryPage(4)}>4</p>
        <p onClick={() => this.props.sendQuyeryPage(5)}>5</p>

      </div>
    )
  }

}

export default Home;