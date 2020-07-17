
    import React, { Component } from 'react';
    import Caps from './components/caps';

    class App extends Component {
      state = {
        caps: [],
        photo : []
      }

      componentDidMount() {
        fetch('http://localhost:8080/caps/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ caps: data })
        })
        .catch(console.log)
      }

      render() {
        return (
          <div>
            <Caps caps={this.state.caps} />
         </div>       
        );        
      }
    }

    export default App;