import React, { Component } from 'react';
import '../App.css';
import ProfileCard from './profilecard'
import Footer from './footer'



class Home extends Component {


  constructor(props) {
    super(props)

    this.state = {
      profiles: [],
    }

    this.getProfileDetail = (arg) => {
      this.props.sendProfileDetail(arg)
    }

  }



  componentDidMount() {

  }

  render() {
    return (
      < div >
        {
          this.props.loading &&
          <div className="loadingScreen">
            <img src="images/spinner.gif" alt="spinner"></img>

          </div>
        }
        {
          this.props.profiles.length > 0 &&
          <div>
            <div className="profilesCont">

              {this.props.profiles.map((theProfile, idx) => <ProfileCard key={idx} getProfileDetail={() => this.getProfileDetail(theProfile)}{...theProfile} />)}



            </div>
            <Footer sendQuyeryPage={(arg) => this.props.sendQuyeryPage(arg)}></Footer>

          </div>
        }


      </div >
    )
  }

}

export default Home;
