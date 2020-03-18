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
              className="itemUpdater"
              value={item.name}
              onChange={e => props.handleUpdate(index, e.target.value)}
            ></input>
          </form>
          <button onClick={() => props.handleClick(item.name)}>done</button>
          <button onClick={() => props.handleDelete(item.name)}>delete</button>
        </section>
      );
    })}
  </section>
);

export default functionComponent;

// Product Requirements:
// User can add new to-do's
//   - new todo field should clear
//   - hitting enter on an empty todo field should not create an empty todo
