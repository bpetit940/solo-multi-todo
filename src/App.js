import React from "react";
import List from "./List";
import Store from "./Store";
import "./App.css";

class App extends React.Component {
  state = {
    items: Store
  };

  handleSubmit = e => {
    e.preventDefault();
    const newBody = { name: e.target.Todoinput.value };
    this.setState({
      items: [...this.state.items, newBody]
    });
  };

  handleDelete = name => {
    this.setState({
      items: this.state.items.filter(item => item.name !== name)
    });
  };

  handleUpdate = (index, newName) => {
    const newState = [...this.state.items];
    newState[index].name = newName;

    this.setState({
      items: newState
    });
  };

  handleChecked = name => {
    let itemIndex = this.state.items.findIndex(item => item.name === name);
    const newItems = [...this.state.items];
    // Object.is(newItems[0], this.state.items[0])
    const currentItem = newItems[itemIndex];
    currentItem.checked = !currentItem.checked;
    newItems[itemIndex] = currentItem;
    this.setState({
      items: newItems
    });
  };

  render() {
    console.log(this.state);
    return (
      <main className="App">
        <header>
          <h2>React ToDo</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="Todoinput"></label>
            <input
              name="Todoinput"
              className="Todoinput"
              id="Todoinput"
              type="text"
            />
            <button type="submit" name="Todo-submit">
              Add Item
            </button>
          </form>
        </header>
        <List
          items={this.state.items}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          handleClick={this.handleChecked}
        />
      </main>
    );
  }
}

export default App;
