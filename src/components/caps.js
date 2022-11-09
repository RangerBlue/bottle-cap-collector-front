import React, { useState } from 'react'
import CapComponent from './capComponent';


const Caps = ({ caps }) => {
  const [loadedCap, setLoadedCap] = useState([])
  const [modalShow, setModalShow] = useState(false);

  const fetchData = (capID) => {
    fetch('https://130.162.231.246:8080/caps/' + capID)
      .then(res => res.json())
      .then((data) => {
        setLoadedCap(data)
        setModalShow(true)
      })
      .catch(console.log)
  }


  return (
    <div class="container">
      <div class="row">
        {caps.map((cap) => (
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
            <img src={cap.url + "=w95"} height={95} width={95} onClick={() => fetchData(cap.id)} 
            alt = "cap"></img>
          </div>
        ))}
      </div>
      <CapComponent
        capName={loadedCap.name}
        capURL={loadedCap.url}
        capDesc={loadedCap.description}
        show={modalShow}
        onHide={() => setModalShow(false)} />
    </div>
  )
};

export default Caps