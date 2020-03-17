import React from "react";

const functionComponent = props => (
  <section className="List">
    {props.items.map(item => {
      return (
        <section className="item">
          <p>{item.name}</p>
          <button onClick={props.handleDeleteFactory(item.name)}>delete</button>
        </section>
      );
    })}
  </section>
);

export default functionComponent;
