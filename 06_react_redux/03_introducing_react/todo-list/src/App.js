import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class RenderList extends Component {
  render() {
    return(
      <div>
        <ul>
          {
            this.props.list.map((item, index) =>
              <div>
                <li key={index}><input type='checkbox' value={item.toString()}/></li>
              </div>
            )
          }
        </ul>
      </div>
    );
  }
}

class RenderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.action(this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {listOfTasks: ["fruit"]}
  }

  addTask(task){
    this.setState({listOfTasks: this.state.listOfTasks.concat(task)});
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">List of tasks</h1>
        <RenderForm action={task => this.addTask(task)} />
        <RenderList list={this.state.listOfTasks}/>
      </div>
    );
  }
}

export default App;
