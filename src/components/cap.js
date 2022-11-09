import React from 'react'

class Cap extends React.Component {
  state = { cap: [] }
  componentDidMount() {
    fetch('https://130.162.231.246:8080/caps/' + this.props.id)
      .then(res => res.json())
      .then((data) => {
        this.setState({ cap: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" >
        <div class="text-center" >
        <img src={this.state.cap.url + "=w190"} height={190} width={190} class="rotate" 
        alt = "cap"></img>
        </div>
      </div>
    );
  };
}

export default Cap