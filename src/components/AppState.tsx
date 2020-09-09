import React, { createContext, useState, useContext } from 'react';

interface AppStateValue {
    cart: {
      items: { id: number; name: string; price: number; quantity: number }[];
    };
  }
  
  const defaultStateValue: AppStateValue = {
    cart: {
      items: [],
    },
  };

export const AppStateContext = createContext(defaultStateValue);

//we cannot provide a default value to createContext since setState is available only from within the component
//so let's set the default value to undefined
export const AppSetStateContext = createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined);

export const useSetState = () => {
    const setState = useContext(AppSetStateContext);
    if (!setState) {
      throw new Error(
        'Error because useSetState was called outside of the AppSetStateContext provider'
      );
    }
    return setState;
  };
const AppStateProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(defaultStateValue);
    //or:
    //const [state, setState] = useState<AppStateValue>();
    //in which case state can be of type AppStateValue | undefined

    return (<AppStateContext.Provider value={state}>
        <AppSetStateContext.Provider value={setState}>
            {children}
        </AppSetStateContext.Provider>
    </AppStateContext.Provider>
    );
};
export default AppStateProvider;