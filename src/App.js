
import React, { Component } from 'react';
import Cap from './components/cap';

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
        for (let i = 0; i < 5; i++) {
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


  render() {
    if (this.state.loaded) {
      return [
        <center><h1>Bottle Cap Collector</h1></center>,
        <div class="itemList">
          {this.renderItems()}
        </div>
      ];
    }
    return (
      <div>Loading...</div>
    )
  }
}

export default App;