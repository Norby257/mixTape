import React, { Component} from 'react';

// const Navbar = () => (
//     <nav className = "navbar-navbar-inverse">
//     Navbar here 
//     </nav>
// );


class Navbar extends Component {
    // methods here 

    //  state here 

    //  lifecycle method here 

    render() {
        return (
            <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <i className="fa fa-spotify"></i>Spotify
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">MixTape</a>
                </div>
              </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Sign Up <span className="sr-only">(current)</span></a></li>
        <li className="active"><a href="#">View Sample Playlist <span className="sr-only">(current)</span></a></li>
        <li><a href="#">Login</a></li>
      </ul>
      </div>
          </nav>
        )
    }
}

export default Navbar;
