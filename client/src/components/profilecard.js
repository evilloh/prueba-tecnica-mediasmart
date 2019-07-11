import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';


const ProfileCard = (theProfile) => {
  return (
    <Link to={`/detail`} onClick={theProfile.getProfileDetail} className="card">
      <div className="upperCard">
        <img src={theProfile.image} alt="profile" />
        <p><span>Name:</span>{theProfile.name}</p>
      </div>
      <p className="cardAge"><span>Age:</span>{theProfile.age}</p>
    </Link>
  )
}

export default ProfileCard