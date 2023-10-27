"use client";
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Intittail State
const initialState = {
  transactions: [
    { id: 1, text: "12/3/23", amount: -20 },
    { id: 2, text: "13/3/23", amount: 300 },
    { id: 3, text: "14/3/23", amount: -10 },
    { id: 4, text: "15/3/23", amount: 150 },
    { id: 5, text: "16/3/23", amount: 200 },
    { id: 6, text: "17/3/23", amount: -300 },
    { id: 7, text: "18/3/23", amount: -10 },
    { id: 8, text: "19/3/23", amount: 150 },
    { id: 9, text: "20/3/23", amount: 20 },
    { id: 10, text: "21/3/23", amount: 30 },
    { id: 11, text: "22/3/23", amount: 110 },
    { id: 12, text: "23/3/23", amount: 100 },
    { id: 13, text: "21/3/23", amount: 30 },
    { id: 14, text: "22/3/23", amount: 110 },
    { id: 15, text: "23/3/23", amount: 150 },
  ],
};

// create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
