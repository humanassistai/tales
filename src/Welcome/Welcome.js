import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <div className="splash"> 
            <div className="center">
                <div className="details">
                    
                    <h1>Telling Tale('s)</h1>
                    <br/>
                    <ul>
                        <li>Create Story/Tale and Share with the world</li>
                    </ul>
                    <p className="production">
                        Submit your  story &nbsp;
                        <a href="https://github.com/humanassistai/open-tales/tree/master" className="zocial github" target="_blank">github &nbsp;</a>
                    </p>
                    <div className="options">
                        <p><a href="https://tales.humanassistai.com" target="_blank">Create your story (s) with us</a> </p>
                        <div className="">
                        <a href="/user"><button className="Button Button--Neutral">Read Tales </button></a>
                        </div>
                    </div>
                </div>

                <div className="bookshelf">
                    <div className="shelf">
                        <div className="row-1">
                            <div className="loc">
                                <div>  <a href="/user"><div className="sample thumb1"></div> </a></div>
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
      </div>
    );
  }
}

export default Welcome;
