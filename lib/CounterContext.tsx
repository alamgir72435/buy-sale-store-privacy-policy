import { createContext, useContext, useReducer, ReactNode } from "react";

const defaultState = {
  count: 0,
};

// type
export type State = typeof defaultState;
export type Action = "increment" | "decrement";
export type Dispatch = (action: Action) => void;

interface contextType {
  state: State;
  dispatch: Dispatch;
}

const counterContext = createContext<contextType | undefined>(undefined);

// Reducer
function counterReducer(state: State, action: Action) {
  switch (action) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
  }
}

// Provider
export function CounterProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(counterReducer, defaultState);

  return (
    <counterContext.Provider value={{ state, dispatch }}>
      {children}
    </counterContext.Provider>
  );
}

// use Context

export function useCounter() {
  const context = useContext(counterContext);
  if (!context) throw new Error("out of Context");
  return context;
}
