import React, { createContext, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });
        
  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    });
  };

    const context = { cars, moveCar };

    return (
      <Context.Provider value={context}>
        {children}
      </Context.Provider>
    );
  };

export {Context, Provider as Provider };
