import { AppContext } from 'core/app/context/AppContext';
import { useContext } from 'react';

function useAppContext() {
  return useContext(AppContext);
}

export default useAppContext;
