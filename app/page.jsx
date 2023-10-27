import Image from "next/image";
import { LineChart } from "./Components";
import PieChart from "./Components/PieChart";
import { ExpenseTracker, SipCalc } from "./Views";

export default function Home() {
  return (
    <main className="mainBg w-[100vw] h-[100vh] grid grid-flow-row pb-20">
      <div className="grid grid-flow-col">
        <SipCalc />
        <div className="place-self-center bg-[#eeeeee] rounded-lg p-6 m-12">
          <ExpenseTracker />
        </div>
        <div className="w-[600px] h-[400px] bg-[#ffffff] rounded-md place-self-center p-6">
          <LineChart />
        </div>
      </div>
      <div className="grid grid-flow-col max-w-[100vw] place-self-center gap-12">
        <div className="w-[400px] h-[400px] bg-[#eeeeee] rounded-md place-self-center">
          <PieChart />
        </div>
        <div className="w-[400px] h-[400px] bg-[#eeeeee] rounded-md place-self-center">
          <PieChart />
        </div>
      </div>
    </main>
  );
}
