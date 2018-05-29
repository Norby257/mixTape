import React, { Component } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      <Header />
      {/* <div className="App">
        <p className="App-intro">
          Components go here 
        </p>
      </div> */}
      
      <Footer />
    </div>
    );
  }
}

export default App;
