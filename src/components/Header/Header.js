import React, { Component} from 'react';

class Header extends Component  {
  //  constructor methods go here {


  // }

  render() {
    return (
      <header className="header">
            <i class="fa fa-spotify"></i>Spotify
         <h2>Welcome to mix-tape <small>Travel Playlist solution</small></h2>
         </header>

    )
  }
}
// const Header = props => (
//     <header className="header">
//       <i class="fa fa-spotify"></i>Spotify
//     <h2>Welcome to mix-tape <small>Travel Playlist solution</small></h2>

//   </header>
  
// );

export default Header;