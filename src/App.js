
import React, { Component } from 'react';
import Cap from './components/cap';
import Caps from './components/caps';
import logo from './caplogo.png';

class App extends Component {
  state = {
    cap: [],
    ids: [],
    loaded: false
  }

  addNewId = (newID) => {
    this.setState(prevState => ({
      ids: [...prevState.ids, newID]
    }));
  };

  componentDidMount() {
    fetch('https://bottlecapcollector.herokuapp.com/links/')
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

  renderItems = () => {
    let list = [];
    this.state.ids.forEach(id =>
      list.push(<Cap id={id} />)
    );
    return list;
  }

  renderLogo = () => {
    return (
      <div class="loading">
        <img src={logo} height={200} width={200} class="rotateLogo"></img>
      </div>
    );

  }


  render() {
    if (this.state.loaded) {
      return [
        <center><h1>Bottle Cap Collector</h1></center>,
        <div class="container">
          <div class="row">
            {this.renderItems()}
          </div>
        </div>,
        <center><h2>All caps:</h2></center>,
        <div>
          <Caps caps={this.state.cap.sort(({ id: previousID }, { id: currentID }) => previousID - currentID)} />
        </div>
      ];
    } else {
      return (
        this.renderLogo()
      )
    }

  }
}

export default App;