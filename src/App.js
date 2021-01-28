
import React, { Component } from 'react';
import Cap from './components/cap';
import logo from './pictures/caplogo.png';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import API from './pages/api.js'
import Catalog from './pages/catalog.js'
import Home from './pages/home.js'
import Mobile from './pages/mobile.js'
import Pictures from './pages/pictures';
import namepicture from './pictures/name.png';
import { Card } from 'react-bootstrap'
import { AnimatedSwitch } from 'react-router-transition';

class App extends Component {
  constructor() {
    super()
    window.addEventListener("resize", this.update);
  }

  state = {
    cap: [],
    ids: [],
    loaded: false,
    outsideWorkingHours: "",
    windowWidth: window.innerWidth
  }

  update = () => {
    this.setState({
      windowWidth: window.innerWidth
    });
  };

  addNewId = (newID) => {
    this.setState(prevState => ({
      ids: [...prevState.ids, newID]
    }));
  };

  componentDidMount() {
    this.update()
    const now = new Date()
    if (!(((now.getHours() === 0 && now.getMinutes() >= 30) || (now.getHours() > 0)) && (now.getHours() < 7))) {
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
    else {
      this.setState({ outsideWorkingHours: <div>App is currently outside working hours, go back at 7.00</div> })
    }
  }

  renderRandomCaps = () => {
    if (this.state.windowWidth < 576) {
      return (
        <div class="container">
          <div class="row">
            {this.renderItems(1)}
          </div>
        </div>
      )
    } else if (this.state.windowWidth > 576 && this.state.windowWidth < 768) {
      return (
        <div class="container">
          <div class="row">
            {this.renderItems(2)}
          </div>
        </div>
      )
    }
    else {
      return (
        <div class="container">
          <div class="row">
            {this.renderItems(6)}
          </div>
        </div>
      )
    }

  }

  renderItems = (amount) => {
    let list = [];
    this.state.ids.slice(0, amount).forEach(id =>
      list.push(<Cap id={id} />)
    );
    return list;
  }

  renderLogo = (text) => {
    return (
      <div class="loading">
        <img src={logo} height={200} width={200} class="rotateLogo" alt="loading_logo"></img>
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
        <NavLink to='/album' style={{ padding: 20 }} activeClassName="active">
          ALBUM
      </NavLink>
      </nav>
    );
  }

  render() {
    if (this.state.loaded) {
      return [
        <Router basename="/bottle-cap-collector-front">
          <div class="container">
            <img src={namepicture} class="img-fluid" id="name-logo" alt="image_logo"></img>
          </div>
          
          {this.renderRandomCaps()}
          {this.renderMenu()}
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 1 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
          <Route path='/' exact component={Home} />
          <Route path='/mobile' component={Mobile} />
          <Route path='/api' component={API} />
          <Route path='/catalog' render={() => <Catalog caps={this.state.cap} />} />
          <Route path='/album' component={Pictures} />
          <Card>
            <Card.Header id="footer">
              <a href="https://www.linkedin.com/in/kamil-machul/" target="_blank" rel="noopener noreferrer" >
                &#169;MACHWARE KAMIL MACHUL 2021</a>
            </Card.Header>
          </Card>
          </AnimatedSwitch>
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