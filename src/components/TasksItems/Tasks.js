import React, { Component } from "react";
import TaskItems from './TaskItems'
import './TaskItems.css'
class Tasks extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item){
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }
  
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
        <h1 className="title">MY BACKPACK</h1>
          <form onSubmit={this.addItem}>
            <input ref={ (a) => this._inputElement = a}
            placeholder="THINGS I NEED...">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TaskItems entries={this.state.items}
                   delete={this.deleteItem} />
      </div>
    );
  }
}

export default Tasks;