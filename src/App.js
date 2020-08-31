import React from 'react';
import './App.css';
import Stack from './components/stack/stack';
import Button from './components/buttons/button';
import Style from './components/stack/stack.css';
import { connect } from 'react-redux';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stack: [] };
  }
  
  render() {
    const stackItems = this.props.stk;
    console.log('render', stackItems);
    return (
      <div>
        <center>
        <h2>Stack Demo</h2>
        <br />
        <br />
        <br />
        
          <div className={Style.stackContainer}>
            {stackItems.reverse().map((val, index) => (
              <Stack key={index} textTyle="Element" num={val} />
            ))}
          </div>
          <div>
            <br />
            <Button name="PUSH Elements" click={this.props.operationPUSH} />
            <Button name="POP Elements" click={this.props.operationPOP} />
            <Button name="EMPTY Stack" click={this.props.operationEMPTY} />
          </div>
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stk: state.stack
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    operationPUSH: () => dispatch({ type: 'push' }),
    operationPOP: () => dispatch({ type: 'pop' }),
    operationEMPTY: () => dispatch({ type: 'empty' }),
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(App);
