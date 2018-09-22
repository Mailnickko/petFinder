import React, { Fragment } from "react";

const AdoptModalContent = props => (
  <Fragment>
    <h1>Would you like to adopt {props.name}?</h1>
    <button onClick={props.toggleModal}>Yep</button>
    <button onClick={props.toggleModal}>Nope</button>
  </Fragment>
);

export default AdoptModalContent;
