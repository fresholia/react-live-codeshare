import { createContext, Dispatch } from 'react';

interface CodeViews {
  content: string;
  editable: boolean;
  name: string;
  language: string;
}

interface AppDetails {
  id: number;
  code: string;
  tabs: CodeViews[];
}

interface AppState {
  details: AppDetails;
}

const initialAppState: AppState = {
  details: {} as AppDetails,
} as const;

type AppStateAction = {
  type: 'SET_APP_DETAILS';
  payload: string;
};

function appStateReducer(state = initialAppState, action: AppStateAction) {
  let newState = state;
  switch (action.type) {
    default:
      break;
  }
  return newState;
}

const AppContext = createContext({
  state: initialAppState,
  dispatch: (() => undefined) as Dispatch<AppStateAction>,
});

export { appStateReducer, AppContext, initialAppState };
export type { AppStateAction, Operation };
