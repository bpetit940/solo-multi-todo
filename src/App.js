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

  handleDeleteFactory = name => {
    return () => this.handleDelete(name);
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
          handleDeleteFactory={this.handleDeleteFactory}
        />
      </main>
    );
  }
}

export default App;
