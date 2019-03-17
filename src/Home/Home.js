import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
class Home extends Component {
  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <h4>
                You are logged in!
              </h4>
            )
        }
        {
          !isAuthenticated() && (
             <Welcome/>
            )
        }
      </div>
    );
  }
}

export default Home;
