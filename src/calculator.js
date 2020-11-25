import React, { Component } from 'react';
import { Alert, Text, View } from 'react-native';

import { connect} from "react-redux";
import { addNumber, giveOperator, getResult, clearAll } from './redux/actions';


import KeyPadComponent from './components/KeyPadComponent'
import ResultComponent from './components/ResultComponent'
import store from "./redux/store";

class Calculator extends Component {
  constructor(props){
    super(props);

    this.state = {
        result: ""
    }
  }

  onClick = button => {
    //console.log(button);
    if(button === "="){
        this.props.getResult();
        this.setState({
          result: store.getState().result
        });
    }

    else if(button === "C"){
        this.props.clearAll();
        this.setState({
          result: ""
        });
    }

    else {
      if(isNaN(button)) {
        let operator = 0;
        switch(button) {
          case "+": {
            operator = 1
            break;
          }
          case "-": {
            operator = 2
            break;
          }
          case "*": {
            operator = 3
            break;
          }
          case "/": {
            operator = 4
            break;
          }
        }
        this.props.giveOperator(operator);
      } else {
        this.props.addNumber(parseInt(button, 10));
      }
      this.setState({
        result: this.state.result + button
      });
    }
  };

  render() {
    return (
      <View>
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
      </View>
    );
  }
}

export default connect(
  null,
  { addNumber, giveOperator, getResult, clearAll }
)(Calculator);