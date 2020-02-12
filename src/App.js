import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      total: 0,
      valueOne: 0,
      valueTwo: 0
    }
  }

  backSpace = () => {
    console.log("backspace")
  }

  number = (event) => {
    console.log(event.target.innerText)
  }

  render(){
    return(
      <div className="parent">
        <div className="div1">{this.state.total}</div>
        <div className="div2">%</div>
        <div className="div3">CE</div>
        <div className="div4">C</div>
        <div className="div5" onClick={this.backSpace}>BackSpace</div>
        <div className="div6" onClick={this.number}>7</div>
        <div className="div7" onClick={this.number}>8</div>
        <div className="div8" onClick={this.Number}>9</div>
        <div className="div9" onClick={this.calculate}>X</div>
        <div className="div10" onClick={this.number}>4</div>
        <div className="div11" onClick={this.number}>5</div>
        <div className="div12" onClick={this.number}>6</div>
        <div className="div13" onClick={this.calculate}>-</div>
        <div className="div14" onClick={this.number}>1</div>
        <div className="div15" onClick={this.number}>2</div>
        <div className="div16" onClick={this.number}>3</div>
        <div className="div17" onClick={this.calculate}>+</div>
        <div className="div18" onClick={this.calculate}>/</div>
        <div className="div19" onClick={this.number}>0</div>
        <div className="div20" >.</div>
        <div className="div21" >=</div>
      </div>
    )
  }
}

export default App;
