import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      value: "",
      equation: ""
    }
  }

  clear = () => {
    this.setState({
      value: "",
      equation: ""
    })
  }

  clearEntry = () => {
    this.setState({
      value: ""
    })
  }

  backSpace = () => {
    this.setState({
      value: this.state.value.substring(0, this.state.value.length-1)
    })
  }

  number = (event) => {

    if(event.target.innerText === "." && !this.state.value.includes(".")){
      this.setState({
        value: this.state.value + event.target.innerText
      })
    }else if(event.target.innerText !== "."){
      this.setState({
        value: this.state.value + event.target.innerText
      })
    }

  }

  calculate = (event) => {

    switch(event.target.innerText){

      case "+":
        
        if(this.state.value !== "" && this.state.value !== "."){
          if(this.state.equation === "" ){
            this.setState({
              equation: this.state.value + "+",
              value: ""
            })
          }else{
            this.setState({
              equation: this.state.equation + this.state.value + "+",
              value: ""
            })
  
          }
        }


        break;

      case "-":
        if(this.state.value !== "" && this.state.value !== "."){
          if(this.state.equation === ""){
            this.setState({
              equation: this.state.value + "-",
              value: ""
            })
          }else{
            this.setState({
              equation: this.state.equation + this.state.value + "-",
              value: ""
            })

          }
        }

        break;

      case "x":
        if(this.state.value !== "" && this.state.value !== "."){
          if(this.state.equation === ""){
            this.setState({
              equation: this.state.value + "*",
              value: ""
            })
          }else{
            this.setState({
              equation: this.state.equation + this.state.value + "*",
              value: ""
            })

          }
        }

        break;

      case "/":
        if(this.state.value !== "" && this.state.value !== "."){
          if(this.state.equation === ""){
            this.setState({
              equation: this.state.value + "/",
              value: ""
            })
          }else{
            this.setState({
              equation: this.state.equation + this.state.value + "/",
              value: ""
            })

          }
        }

        break;
      
    }
  }

  answer = () => {


    if(this.state.value !== "" && this.state.value !== "."){

      this.setState({
        equation: this.state.equation + this.state.value
      },()=>{
        this.setState({
          value: eval(this.state.equation),
          equation: ""
        })
      })

    }

  }

  render(){
    return(
      <div className="parent">
        <div className="div1">
          {this.state.equation}<br/>
          {this.state.value}
        </div>
        <div className="div2">%</div>
        <div className="div3" onClick={this.clearEntry}>CE</div>
        <div className="div4" onClick={this.clear}>C</div>
        <div className="div5" onClick={this.backSpace}>BackSpace</div>
        <div className="div6" onClick={this.number}>7</div>
        <div className="div7" onClick={this.number}>8</div>
        <div className="div8" onClick={this.number}>9</div>
        <div className="div9" onClick={this.calculate}>x</div>
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
        <div className="div20" onClick={this.number}>.</div>
        <div className="div21" onClick={this.answer}>=</div>
      </div>
    )
  }
}

export default App;
