
import React, { Component } from 'react';
import Cap from './components/cap';
import logo from './pictures/caplogo.png';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import API from './pages/api.js'
import Catalog from './pages/catalog.js'
import Home from './pages/home.js'
import Mobile from './pages/mobile.js'

class App extends Component {
  state = {
    cap: [],
    ids: [],
    loaded: false,
    outsideWorkingHours : ""
  }
  

  addNewId = (newID) => {
    this.setState(prevState => ({
      ids: [...prevState.ids, newID]
    }));
  };

  componentDidMount() {
    const now = new Date()
    if(!((now.getHours>=0 && now.getMinutes >=15) && (now.getHours<7))){
      fetch('https://bottlecapcollector.herokuapp.com/catalog/')
      .then(res => res.json())
      .then((data) => {
        let length = data.length;
        this.setState({ cap: data });
        let item;
        for (let i = 0; i < 6; i++) {
          item = data[Math.floor(Math.random() * length)];
          this.addNewId(item.id);
        }

        this.setState({ loaded: true })
      })
      .catch(console.log)
    } 
    else{
      this.setState({outsideWorkingHours: <div>App is currently outside working hours, go back at 7.00</div>})  
    }  
  }

  renderRandomCaps = () => {
    return (
      <div class="container">
        <div class="row">
          {this.renderItems()}
        </div>
      </div>
    )
  }

  renderItems = () => {
    let list = [];
    this.state.ids.forEach(id =>
      list.push(<Cap id={id} />)
    );
    return list;
  }

  renderLogo = (text) => {
    return (
      <div class="loading">
        <img src={logo} height={200} width={200} class="rotateLogo"></img>
       <div class="textLogo">{text}</div>
      </div>
    );
  }

  renderMenu = () => {
    return (
      <nav class="navbar navbar-expand-xl justify-content-center" id="navBarMain">
        <NavLink to='/' style={{ padding: 20 }} exact activeClassName="active">
          HOME
      </NavLink>
        <NavLink to='/mobile' style={{ padding: 20 }} activeClassName="active">
          MOBILE
      </NavLink>
        <NavLink to='/api' style={{ padding: 20 }} activeClassName="active">
          API
      </NavLink>
        <NavLink to='/catalog' style={{ padding: 20 }} activeClassName="active">
          CATALOG
      </NavLink>
      </nav>
    );
  }

  render() {
    if (this.state.loaded) {
      return [
        <Router basename ="/bottle-cap-collector-front">
          <center><h1 class="display-4"><strong>BOTTLE CAP COLLECTOR</strong></h1></center>
        {this.renderRandomCaps()}
          {this.renderMenu()}
          <Route path='/' exact component={Home} />
          <Route path='/mobile' component={Mobile} />
          <Route path='/api' component={API} />
          <Route path='/catalog' component={() => <Catalog caps={this.state.cap} />} />
        </Router>
      ];
    } else {
      return (
        <div>
          {this.renderLogo(this.state.outsideWorkingHours)}
        </div>

      )
    }

  }
}

export default App;