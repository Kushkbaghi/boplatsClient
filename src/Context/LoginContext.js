import { createContext, useReducer, useEffect } from "react";
import AdminReducer from "./LoginReducers";


// Create function to set value for the state
const initialState = {
  // Data about the admin as an object
  admin: JSON.parse(localStorage.getItem("admin")) || null ,
  // If fetching process started
  proccessStart: false,
  // If threre is any error message
  error: false,
};

// Create Context
export const AdminContext = createContext(initialState);

// Export provider to use in index.js
// there App komponent is the children of the provider
// the childern have access to all valuestates of provider
export const GetAdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdminReducer, initialState);
  // Create local Storage object
  useEffect(() => {
    
    window.localStorage.setItem("admin", JSON.stringify(state.admin));
  }, [state.admin]);

  return (
    <AdminContext.Provider
      value={{
        admin: state.admin,
        proccessStart: state.proccessStart,
        error: state.error,
        dispatch,
      }}
    >
      {/* Children is the components those are in the providerF */}
      {children}
    </AdminContext.Provider>
  );
};
