"use client";
import React, { useState, useContext } from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { GlobalContext } from "@/context/GlobalState";

const PieChart = async () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const [userData, setUserData] = useState({
    labels: transactions.map((data) => data.text),
    datasets: [
      {
        label: "OutFlow INR",
        data: transactions.map((data) => data.amount),
        backgroundColor: ["#212121", "#123456", "#456789", "#983100"],
      },
    ],
  });
  return <Pie data={userData} />;
};

export default PieChart;

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
