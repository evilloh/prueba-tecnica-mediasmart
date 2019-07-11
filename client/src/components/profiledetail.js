import React, { Component } from 'react'

import { Link } from 'react-router-dom'



class ProfileDetail extends Component {

  constructor(props) {
    super(props)
    this.state = { profiles: {} }
  }


  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    return (

      <div className="detail">
        <div className="upperDetail">
          <img src={this.props.profile.image} alt="profile" />
          <div className="upperInfo">
            <p><span>Name:</span>{this.props.profile.name}</p>
            <p className="cardAge"><span>Age:</span>{this.props.profile.age}</p>
          </div>
        </div>
        <p className="lowerDetail">{this.props.profile.bio}
          <Link to={"/"} className="backBtn" alt="logo">#Back</Link></p>


      </div>



    )
  }
}

export default ProfileDetail