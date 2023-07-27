
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Crea el contexto
const ShoesContext = createContext();

// Proveedor del contexto
const ShoesContextProvider = ({ children }) => {
  const [shoes, setShoes] = useState('');

  return (
    <ShoesContext.Provider value={{ shoes, setShoes }}>
      {children}
    </ShoesContext.Provider>
  );
};

ShoesContextProvider.propTypes={
    children: PropTypes.object
}

export { ShoesContext, ShoesContextProvider };