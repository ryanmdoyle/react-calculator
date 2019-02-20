import React, { Component } from 'react';

const Button = (props) => <button id={props.id} className={props.class} value={props.value} onClick={props.handleClick}>{props.value}</button>

class App extends Component { //look to replace eval() with jexl
  constructor(props) {
    super(props);
    this.state = {
      resultDisplay: "0",
      expressionDisplay: "0",
      currentEntry: "0"
    }
    
    this.handleInput = this.handleInput.bind(this);
    this.duplicateOperation = this.duplicateOperation.bind(this);
    this.clear = this.clear.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleInput(value) {

    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const operators = [".","*","/","+","-"]

    if (numbers.includes(value)) { //constols entry of number buttons
      if (this.state.expressionDisplay === "0") { // Sets first value & prevents first value from being 0.
        this.setState({
          expressionDisplay: value,
          currentEntry: value
        })
      } else { // Adds additional values on to expression string once there is an initial value
        this.setState({
          expressionDisplay: this.state.expressionDisplay.concat(value),  //change to concat the string at the end (currently it adds the value)
          currentEntry: this.state.currentEntry.concat(value)
        })
      }
    } else if (operators.includes(value)) { //controls entry of operators
      
      if (value === "." && !this.state.currentEntry.includes(".")) { //handle entry of decimals
        this.setState({
          expressionDisplay: this.state.expressionDisplay.concat(value),  //change to concat the string at the end (currently it adds the value)
          currentEntry: this.state.currentEntry.concat(value)
        })
      } else if (value !== ".") {

        if (this.state.currentEntry.length > 1 || this.state.currentEntry !== "0") {
          this.setState({
            expressionDisplay: this.duplicateOperation(this.state.expressionDisplay.concat(value)),
            currentEntry: "operator"
          })
        }
      }
    }
  }

  duplicateOperation(entry) {
    const input = entry.split("")  
    const last = input[input.length-1];
    const secToLast = input[input.length-2];
      if (last === "+" || last === "-" || last === "/" || last === "*" || last === ".") {
        if (secToLast === "+" || secToLast === "-" || secToLast === "/" || secToLast === "*" || secToLast === ".") {
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
    
    if (this.state.currentEntry === "operator") {
      this.setState({
        // eslint-disable-next-line
        resultDisplay: eval(this.state.expressionDisplay.substring(0, this.state.expressionDisplay.length-1)).toString(), // toString ensures future operation are possible (allows concatenating additonal strings)
        // eslint-disable-next-line
        expressionDisplay: eval(this.state.expressionDisplay.substring(0, this.state.expressionDisplay.length-1)).toString()
      })
    } else {
      this.setState({
        // eslint-disable-next-line
        resultDisplay: eval(this.state.expressionDisplay).toString(), // toString ensures future operation are possible (allows concatenating additonal strings)
        // eslint-disable-next-line
        expressionDisplay: eval(this.state.expressionDisplay).toString()
      })
    }
  }

  clear() {
    this.setState({
      resultDisplay: "0",
      expressionDisplay: "0",
    })
  }
  
  render() {
    return (
      <div className="grid-container">
        <div className="display">
          <h1>{this.state.resultDisplay}</h1>
  
          <p>{this.state.expressionDisplay}</p>
        </div>
        <Button id="clear" class={`button button-secondary`} value="ac" handleClick={this.clear}/>
        <Button id="one" class="button button-primary" value={1} handleClick={() => this.handleInput("1")}/>
        <Button id="two" class="button button-primary" value={2} handleClick={() => this.handleInput("2")}/>
        <Button id="three" class="button button-primary" value={3} handleClick={() => this.handleInput("3")}/>
        <Button id="four" class="button button-primary" value={4} handleClick={() => this.handleInput("4")}/>
        <Button id="five" class="button button-primary" value={5} handleClick={() => this.handleInput("5")}/>
        <Button id="six" class="button button-primary" value={6} handleClick={() => this.handleInput("6")}/>
        <Button id="seven" class="button button-primary" value={7} handleClick={() => this.handleInput("7")}/>
        <Button id="eight" class="button button-primary" value={8} handleClick={() => this.handleInput("8")}/>
        <Button id="nine" class="button button-primary" value={9} handleClick={() => this.handleInput("9")}/>
        <Button id="zero" class="button button-primary" value={0} handleClick={() => this.handleInput("0")}/>
        <Button id="add" class="button button-primary" value={"+"} handleClick={() => this.handleInput("+")}/>
        <Button id="subtract" class="button button-primary" value={"-"} handleClick={() => this.handleInput("-")}/>
        <Button id="multiply" class="button button-primary" value={"*"} handleClick={() => this.handleInput("*")}/>
        <Button id="divide" class="button button-primary" value={"/"} handleClick={() => this.handleInput("/")}/>
        <Button id="decimal" class="button button-primary" value={"."} handleClick={() => this.handleInput(".")}/>
        <Button id="equals" class="button button-primary" value={"="} handleClick={this.calculate}/>
      </div>
    );
  }
}

export default App;
