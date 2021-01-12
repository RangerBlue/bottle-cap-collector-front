import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const CapComponent = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      class="container-fluid"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.capName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <p>
          <div class="float-left">
            <img src={props.capURL + "=w400"} height={400} width={400} class="img-fluid" ></img>
          </div>

          <div class="text-justify">
            {props.capDesc}
          </div>

        </p>
      </Modal.Body>
    </Modal>
  );
};

export default CapComponent