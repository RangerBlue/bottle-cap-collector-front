import React from 'react'

class Cap extends React.Component {
  state = { cap: [] }
  componentDidMount() {
    fetch('https://bottlecapcollector.herokuapp.com/caps/' + this.props.id)
      .then(res => res.json())
      .then((data) => {
        this.setState({ cap: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div>
        <div class="card">
          <div class="card-body">
            <img src={this.state.cap.fileLocation + "=w150"} height={200} width={200}></img>
          </div>
        </div>
      </div>
    );
  };
}

export default Cap