import { useState } from 'react';

function useGenericState(initialState) {
  const [genericState, setGenericState] = useState(initialState);
  const setState = ({ target: { name, value } }) => {
    setGenericState((prevState) => ({ ...prevState, [name]: value }));
  };

  return [genericState, setState];
}

export default useGenericState;
