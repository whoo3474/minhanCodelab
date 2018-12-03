import React, { Component } from 'react';
import withSplitting from './withSplitting'
const SplitMe_2 = withSplitting(() => import('./SplitMe_2'));

class App extends Component {
  state = {
    SplitMe: null,
    toggle : false,
    visible: false
  };
  alertHandleClick = () => {
    import('./notify').then(({default:notify}) =>{
      notify();
    })
  };
  componentHandleClick = () => {
    import('./SplitMe').then(({ default: SplitMe }) => {
      this.setState({
        SplitMe,
        toggle : this.state.toggle?false:true
      });
    });
  };
  handleClick = () => {
    this.setState({
      visible: true
    });
  };
  render() {
    const { SplitMe,toggle,visible  } = this.state;
    return (
      <div>
      <button onClick={this.alertHandleClick}>Click Me-alert</button>
      <button onClick={this.componentHandleClick}>Click Me-component</button>
      <button onClick={this.handleClick}>Click Me-HOC code-splitting</button>
      {visible && <SplitMe_2 />}
      {toggle ? SplitMe && <SplitMe /> : ''}
      </div>
    );
  }
}

export default App;