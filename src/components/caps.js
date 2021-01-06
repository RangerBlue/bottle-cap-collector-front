import React from 'react'

const Caps = ({ caps }) => {
  return (
    <div class="container">
      <div class="row">
        {caps.map((cap) => (
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
            <img src={cap.url + "=w95"} height={95} width={95}></img>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Caps