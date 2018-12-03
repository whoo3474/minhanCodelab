import React, { Component } from 'react';

class App extends Component {
  state = {
    SplitMe: null,
    toggle : false
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
  render() {
    const { SplitMe,toggle } = this.state;
    return (
      <div>
      <button onClick={this.alertHandleClick}>Click Me-alert</button>
        <button onClick={this.componentHandleClick}>Click Me-component</button>
        {toggle ? SplitMe && <SplitMe /> : ''}
      </div>
    );
  }
}

export default App;