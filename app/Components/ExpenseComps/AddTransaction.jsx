"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import map from "@/assets/map.svg";
import dia from "@/assets/dialog.png";

import { GlobalContext } from "@/context/GlobalState";
export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [vis, setVis] = useState(false);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    console.log("add");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <div
        onClick={() => {
          setVis(!vis);
        }}
        className="hover:cursor-pointer rounded-xl px-6 py-3 bg-[#ffffff]"
      >
        <div className="grid grid-flow-col gap-2">
          <Image src={dia} width={45} height={45} alt="place" />
          <span className="self-center p-0 text-sm place-self-start">
            Did you spend on Cafe Dialog?
          </span>
          <Image
            src={map}
            width={30}
            height={30}
            alt="place"
            className="self-center"
          />
        </div>
        {vis && (
          <div>
            <label htmlFor="amount">
              {" "}
              Amount: <br />
              (negative - expense, positive - income)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
        )}
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        {!vis && (
          <div className="form-control">
            <label htmlFor="amount">
              {" "}
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
        )}
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
