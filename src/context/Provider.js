import React from 'react';
import carsContext from './carsContext';

class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      }
    }

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side){
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
    };

    const { children } = this.props;

    return (
      <carsContext.Provider value={ context }>
        { children }
      </carsContext.Provider>
    )
  }
}

export default Provider;
