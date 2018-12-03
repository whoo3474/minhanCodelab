import React, { Component } from 'react';

const withSplitting = getComponent => {
//HOC를 사용하여 더 간단하게 code-splitting 하기
// getComponent 는 () => import('./SplitMe') 의 형태의 함수가 전달되야함.
  class WithSplitting extends Component {
    state = {
      Splitted: null
    };

    constructor(props) {
      super(props);
      getComponent().then(({ default: Splitted }) => {
        this.setState({
          Splitted
        });
      });
    }

    render() {
      const { Splitted } = this.state;
      if (!Splitted) {
        return null;
      }
      return <Splitted {...this.props} />;
    }
  }

  return WithSplitting;
};

export default withSplitting;