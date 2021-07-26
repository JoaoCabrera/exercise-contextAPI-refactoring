import React, { Component } from 'react'
import Context from './Context'

export default class Provider extends Component {
  constructor(props){
    super()

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red' 
      },
    }

    this.changeSignal = this.changeSignal.bind(this);
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  changeSignal(signalColor) {
    this.setState({
      signal: {
        ...this.state.signal,
        color: signalColor,
      },
    });
  };

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    };

    const { children } = this.props;

    return (
      <Context.Provider value={ context }>
        { children }
      </Context.Provider>
    )
  }
}
