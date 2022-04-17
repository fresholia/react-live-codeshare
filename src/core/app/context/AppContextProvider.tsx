import { useReducer } from 'react';
import { appStateReducer, AppContext, initialAppState } from './AppContext';

interface AppContextProviderProps {
  children: React.ReactNode;
  initialValue: any;
}

function AppContextProvider({
  children,
  initialValue,
}: AppContextProviderProps) {
  const [state, dispatch] = useReducer(
    appStateReducer,
    initialValue || initialAppState,
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
