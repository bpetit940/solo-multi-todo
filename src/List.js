import React from "react";

const functionComponent = props => (
  <section className="List">
    {props.items.map((item, index) => {
      return (
        <section className="item">
          <form>
            <label htmlFor="itemUpdater"></label>
            <input
              type="text"
              name="itemUpdater"
              className={
                item.checked
                  ? "itemUpdater itemUpdater--checked"
                  : "itemUpdater"
              }
              value={item.name}
              onChange={e => props.handleUpdate(index, e.target.value)}
            ></input>
          </form>
          <button onClick={() => props.handleChecked(index)}>done</button>
          <button onClick={() => props.handleDelete(item.name)}>delete</button>
        </section>
      );
    })}
  </section>
);

export default functionComponent;

// Model, View, Controller (MVC)

// 1. Model: store and update state
// 2. Controller: respond to user input
// 3. View: show correct representation of state on screen

// Model:
// Some object or set of objects that:
// store state
// maybe offers functions to update state in different scenarios

// Controller:
// Event handling
// Interpreting user actions and routing them to the model
// Send commands to View to update when Model changes

// View:
// Send messages to Controller in response to user actions
// Make sure that commands from Controller cause the DOM
// to be updated
