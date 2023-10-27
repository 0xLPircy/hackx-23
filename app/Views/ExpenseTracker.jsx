import React from "react";
import "./expense.css";
import {
  AddTransaction,
  Balance,
  Header,
  IncomeExpenses,
  TransactionList,
} from "../Components";
import { GlobalProvider } from "@/context/GlobalState";

const ExpenseTracker = () => {
  return (
    <GlobalProvider>
      <div className="Econtainer E">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default ExpenseTracker;
