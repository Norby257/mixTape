import React, { Component } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

//  antd

import {Card} from 'antd';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      <Header />
      <div className="main-content" style={{ padding: "5em" }}>
          <div className="workspace">
            <div style={{ marginTop: "33px",flexWrap:"unset"}} className="row">
              <div className="col-md-6">
      <Card
    hoverable
    style={{
      width: 200,
      float: "left",
      marginBottom: 40,
      height: 305,
      marginRight: 30
    }}
    cover={
      <img
        style={{ height: "186px" }}
        alt="example"
        src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
      />
    }
  >
  </Card>

  <Card
    hoverable
    style={{
      width: 200,
      float: "left",
      marginBottom: 40,
      height: 305,
      marginRight: 30
    }}
    cover={
      <img
        style={{ height: "186px" }}
        alt="example"
        src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
      />
    }
  >
  </Card>
    
    </div>
    </div>
    </div>
    </div>
    <Footer />
    </div>
    );
  }
}

export default App;
