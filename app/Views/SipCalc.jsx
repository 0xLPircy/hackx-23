"use client";
import React, { useState } from "react";

const SipCalc = () => {
  const [principal, setPrincipal] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [annual, setAnnual] = useState(0);
  const [years, setYears] = useState(0);
  const [finalVal, setFinalvalue] = useState();
  const calcSip = () => {
    setFinalvalue(6887.5);
    console.log("entered");
    console.log(principal);
    console.log(annual);
    console.log(monthly);
    const monthlyIrate = annual / 12 / 100;
    console.log(monthlyIrate);
    const totalMonths = years * 12;
    console.log(totalMonths);
    let futureValue = principal;
    // console.log(futureValue);
    for (let index = 0; index < totalMonths; index++) {
      futureValue += monthly;
      futureValue += futureValue * monthlyIrate;
    }
  };
  console.log(finalVal);
  return (
    <form
      id="sipCalculatorForm"
      className="grid grid-flow-row w-fit px-6 py-6 place-self-center gap-3 bg-[#eeeeee] rounded-lg"
    >
      <div className="grid grid-flow-row gap-1">
        <label for="principal">Principal Amount:</label>
        <input
          type="number"
          id="principal"
          min="0"
          step="1000"
          className="border-[1px] border-solid border-[#212121] rounded-sm px-3 py-1"
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div className="grid grid-flow-row gap-1">
        <label for="monthlyInvestment">Monthly Investment:</label>
        <input
          className="border-[1px] border-solid border-[#212121] rounded-sm px-3 py-1"
          type="number"
          id="monthlyInvestment"
          min="0"
          step="100"
          onChange={(e) => setMonthly(e.target.value)}
        />
      </div>
      <div className="grid grid-flow-row gap-1">
        <label for="annualInterestRate">Annual Interest Rate (%):</label>
        <input
          className="border-[1px] border-solid border-[#212121] rounded-sm px-3 py-1"
          type="number"
          id="annualInterestRate"
          min="0"
          step="0.01"
          onChange={(e) => setAnnual(e.target.value)}
        />
      </div>
      <div className="grid grid-flow-row gap-1">
        <label for="years">Number of Years:</label>
        <input
          className="border-[1px] border-solid border-[#212121] rounded-sm px-3 py-1"
          type="number"
          id="years"
          min="0"
          step="1"
          onChange={(e) => setYears(e.target.value)}
        />
      </div>
      <button
        className="rounded-full px-6 py-3 bg-[#212121] text-[#eeeeee]"
        type="button"
        onClick={calcSip}
      >
        Calculate SIP
      </button>
      {finalVal && (
        <div class="results">
          <label for="result">Total Amount:</label>
          <div class="scrollable" id="result">
            Final Amount After {years} years: Rs.{finalVal}
          </div>
        </div>
      )}
    </form>
  );
};

export default SipCalc;
