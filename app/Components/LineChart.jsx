"use client";
import React, { useState, useContext } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { GlobalContext } from "@/context/GlobalState";

const LineChart = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(transactions);
  const [userData, setUserData] = useState({
    labels: transactions.map((data) => data.text),
    datasets: [
      {
        label: "OutFlow INR",
        data: transactions.map((data) => data.amount),
        backgroundColor: ["#212121", "#123456"],
        tension: 0.3,
      },
    ],
  });
  console.log(userData);
  return <Line data={userData} />;
};

export default LineChart;

const dataSet = [
  {
    year: "2002",
    val: 6,
  },
  {
    year: "2003",
    val: 7,
  },
  {
    year: "2004",
    val: 5,
  },
];
