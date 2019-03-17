import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentWillMount(){
      this.setState({
          readStory:false
      })
  }
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  componentWillReceiveProps(nextprops, sate){
    
  }

  login() {
    this.props.auth.login();
  }
  readStory(){
      this.setState({readStory:true})
      this.props.history.replace(`/home`)
  }
  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { readStory } = this.state;
    const isHomepage = this.props.history.location.pathname ==="/home"
    console.log(isHomepage, 'isHomepage ==>')
    return (
    <div className="container">
    {
               !isAuthenticated() && !readStory  && !isHomepage && (
                <div className="splash"> 
                <div className="center">
                    <div className="details">
                        
                        <h1>Telling Tale('s)</h1>
                        <br/>
                        <ul>
                            <li>Create Story/Tale and Share with the world</li>
                        </ul>
                        <div className="options">
                            <p><a href="https://tales.humanassistai.com" target="_blank">Create your story (s) with us</a> </p>
                            <div className="">
                            <button className="button" onClick={this.readStory.bind(this)}><span>Read Tales </span></button>
                            {/* <button className="Button Button--Neutral" onClick={this.readStory.bind(this)}>Read Tales </button> */}
                            </div>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <div className="shelf">
                            <div className="row-1">
                                <div className="loc">
                                    <div>  <a onClick={this.readStory.bind(this)}><div className="sample thumb1"></div> </a></div>
                                    <div>  </div>
                                    <div>  </div>
                                </div>
                            </div>
                            <div className="row-2">
                                <div className="loc">
                                    <div> </div>
                                    <div>  </div>
                                    <div>  </div>
                                </div>
                            </div>
                        </div>
                        <div className="suggestion">&uarr; Pick stories from our shelf</div>
                    </div>
                </div>
            </div>
         
            )
        }
        {
          isAuthenticated() && (''
        )
    }
       
             {/* {
               !isAuthenticated() && (
                   <Button
                     id="qsLoginBtn"
                     bsStyle="primary"
                     className="btn-margin"
                     onClick={this.login.bind(this)}
                   >
                     Log In
                   </Button>
                 )
             }
             {
               isAuthenticated() && (
                   <Button
                     id="qsLogoutBtn"
                     bsStyle="primary"
                     className="btn-margin"
                     onClick={this.logout.bind(this)}
                   >
                     Log Out
                   </Button>
                 )
             } */}
          
       </div>
    );
  }
}

export default App;
