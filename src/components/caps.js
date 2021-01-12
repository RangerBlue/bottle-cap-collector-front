import React, { useEffect, useState } from 'react'
import CapComponent from './capComponent';


const Caps = ({ caps }) => {
  const [loadedCap, setLoadedCap] = useState([])
  const [modalShow, setModalShow] = useState(false);

  const fetchData = (capID) => {
    fetch('https://bottlecapcollector.herokuapp.com/caps/' + capID)
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
            <img src={cap.url + "=w95"} height={95} width={95} onClick={() => fetchData(cap.id)}></img>
          </div>
        ))}
      </div>
      <CapComponent
        capName={loadedCap.capName}
        capURL={loadedCap.fileLocation}
        capDesc={loadedCap.description}
        show={modalShow}
        onHide={() => setModalShow(false)} />
    </div>
  )
};

export default Caps