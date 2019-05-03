import React, {Component} from 'react';
import {Layout, Header, Navigation,Drawer, Content} from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';
import "./App.css";

class App extends Component {
  render(){
    return (
      <div className="demo-big-content">
      <Layout >
          <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to='/'>My Portfolio</Link>} scroll>
              <Navigation>
                  <Link to="/aboutme">About me</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">contact me</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration:'none', color:'black'}} to='/'>My Portfolio</Link>}>
              <Navigation>
                  <Link to="/aboutme">About me</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">contact me</Link>
              </Navigation>
          </Drawer>

          <Content>
            <Main />
          </Content>
      </Layout>
  </div>
  );
}
}

export default App;
