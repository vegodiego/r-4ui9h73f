import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
  	super();
  	this.state={
  		text:""
  	};
  	this.change = this.change.bind(this);
  }	  	
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" value={this.state.text} onChange={this.change} />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  };

  change(event){
  	this.setState({
  		text: event.target.value
  	});
  }
}

export default App;
