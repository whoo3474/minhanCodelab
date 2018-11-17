import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

describe('App', () => {
  let component = null;

  it('renders correctly', () => {
    component = renderer.create(<App />);
  });

  it('matches snapshot', () => {
    const tree =  component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})