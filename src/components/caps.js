import React from 'react'

const Caps = ({ caps }) => {
  return (
    <div>
      <center><h1>Bottle Cap</h1></center>
      {caps.map((cap) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{cap.id}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{cap.fileLocation}</h6>
            <p class="card-text">{cap.capName}</p>
            <p class="card-text">{cap.creationDate}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Caps