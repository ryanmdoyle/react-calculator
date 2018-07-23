import React, { Component } from 'react';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultDisplay: "",
      entryDisplay: "",
    }
  }

  handleInput() {
    //manage state to entryDisplay when entering keys
  }

  duplicateOperation() {
    //check for second entry of operation and replace previous if neccesary
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
      <div class="grid-container">
        <div class="display">display</div>
        <div id="clear" class="button button-secondary">ac</div>
        <div id="plus-min" class="button button-secondary">+/-</div>
        <div id="percent" class="button button-secondary">%</div>
        <div id="one" class="button button-primary">1</div>
        <div id="two" class="button button-primary">2</div>
        <div id="three" class="button button-primary">3</div>
        <div id="four" class="button button-primary">4</div>
        <div id="five" class="button button-primary">5</div>
        <div id="six" class="button button-primary">6</div>
        <div id="seven" class="button button-primary">7</div>
        <div id="eight" class="button button-primary">8</div>
        <div id="nine" class="button button-primary">9</div>
        <div id="zero" class="button-primary">0</div>
        <div id="divide" class="button button-operator">/</div>
        <div id="multiply" class="button button-operator">*</div>
        <div id="subtract" class="button button-operator">-</div>
        <div id="add" class="button button-operator">+</div>
        <div id="decimal" class="button button-primary">.</div>
        <div id="equals" class="button button-operator">=</div>
      </div>
    );
  }
}

export default App;
