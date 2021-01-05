import React from 'react'

const Caps = ({ caps }) => {
  return (
    <div>
      {caps.map((cap) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{cap.id}</h5>
            <img src={cap.fileLocation+"=w200"} height={200} width={200}></img>
            <p class="card-text">{cap.capName}</p>
            <p class="card-text">{cap.creationDate}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Caps