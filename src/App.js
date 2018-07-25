import React, { Component } from 'react';
// import './App.css';

const Button = (props) => <button id={props.id} className={props.class} value={props.value} onClick={props.handleClick}>{props.value}</button>

class App extends Component { //look to replace eval() with jexl
  constructor(props) {
    super(props);
    this.state = {
      resultDisplay: "",
      entryDisplay: "",
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(value) {
    if (this.state.entryDisplay === "") {
      this.setState({
        entryDisplay: value
      })
    } else {
      this.setState({
        entryDisplay: this.state.entryDisplay + value //change to concat the string at the end (currently it adds the value)
      })
    }
    console.log(this.state.entryDisplay);
  }

  duplicateOperation(entry) {
    const input = entry.split("")  
    const last = input[input.length-1];
    const secToLast = input[input.length-2];
      if (last === "+" || last === "-" || last === "/" || last === "*") {
        if (secToLast === "+" || secToLast === "-" || secToLast === "/" || secToLast === "*") {
          const removed = input.splice(-2, 1); console.log(removed);
          return input.join("");
        } else {
          return entry;
        }
      } else {
        return entry;
      }
  }

  calculate() {
    // return calculation from entryDisplay
  }

  clear() {
    // clear everything
  }

  percent() {
    // convert most recent entry/calculated value to it's decimal
  }

  signMod() {
    // change recent value to opposite sign
  }
  
  render() {
    return (
      <div className="grid-container">
        <div className="display">
          <h1>{this.state.entryDisplay}</h1>
          <p>entry</p>
        </div>
        <Button id="clear" class={`button button-secondary`} value="ac" handleClick={() => this.handleInput("clear")}/>
        <Button id="one" class="button button-primary" value={1} handleClick={() => this.handleInput(1)}/>
        <Button id="two" class="button button-primary" value={2} handleClick={() => this.handleInput(2)}/>
        <Button id="three" class="button button-primary" value={3} handleClick={() => this.handleInput(3)}/>
        <Button id="four" class="button button-primary" value={4} handleClick={() => this.handleInput(4)}/>
        <Button id="five" class="button button-primary" value={5} handleClick={() => this.handleInput(5)}/>
        <Button id="six" class="button button-primary" value={6} handleClick={() => this.handleInput(6)}/>
        <Button id="seven" class="button button-primary" value={7} handleClick={() => this.handleInput(7)}/>
        <Button id="eight" class="button button-primary" value={8} handleClick={() => this.handleInput(8)}/>
        <Button id="nine" class="button button-primary" value={9} handleClick={() => this.handleInput(9)}/>
        <Button id="zero" class="button button-primary" value={0} handleClick={() => this.handleInput(0)}/>
        <Button id="add" class="button button-primary" value={"+"} handleClick={() => this.handleInput("+")}/>
        <Button id="subtract" class="button button-primary" value={"-"} handleClick={() => this.handleInput("-")}/>
        <Button id="multiply" class="button button-primary" value={"*"} handleClick={() => this.handleInput("*")}/>
        <Button id="divide" class="button button-primary" value={"/"} handleClick={() => this.handleInput("/")}/>
        <Button id="decimal" class="button button-primary" value={"."} handleClick={() => this.handleInput(".")}/>
        <Button id="equals" class="button button-primary" value={"="} handleClick={() => this.handleInput("=")}/>
      </div>
    );
  }
}

export default App;
