import { createContext, useContext, useState } from "react";
// useContext is a hook that returns the context value
// context value means the value that is passed to the provider
// in this case, the value is {user, login, logout}
// in this case, who is provider? AuthProvider
// in this case, who is consumer? useAuth

const AuthContext = createContext();
// createContext is a function that returns an object with two properties
// Provider and Consumer, they are components

export const AuthProvider = ({children})=>{
    // children is a prop that is passed to the component, but who is parent? App.js

    const [customer, setCustomer]= useState(null);
    // customer is a state variable, why we set as null? because we don't have any customer yet
    // can we set as empty string? yes, but we don't have any customer yet

    const login = (customerData)=>{
        setCustomer(customerData);
    }
    // login is a function that takes customerData as a parameter
    // why we write customerData.customer? because we want to get the customer object from customerData
    // but where we mentioned customer is object? in the login function in Login.js


    const logout = ()=>{
        setCustomer(null);
        // why we set as null, because when customer logout, then there is no customer, so no details
    }

// authContext is a component that returns AuthContext.Provider component
// AuthContext.Provider is a component that returns children
// what we got from children? does it pass data? yes, it passes data 

    return(
        <AuthContext.Provider value={{customer, login, logout}}>
            
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = ()=>{
    // why we write useAuth? because we want to use the AuthContext
    return useContext(AuthContext);
};