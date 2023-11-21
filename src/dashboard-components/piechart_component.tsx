import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";
import PieCharts from "@/components/PieCharts";

const breakdown: { color: string; label: string; percentage: number }[] = [
  { color: "#8b61ff", label: "data 1", percentage: 35 },
  { color: "#4432cd", label: "data 2 ", percentage: 25 },
  { color: "#a01414", label: "data 3", percentage: 10 },
  { color: "#2dd4bf", label: "data 4", percentage: 25 },
  { color: "#fe964a", label: "data 5", percentage: 5 },
];

const PieChartBreakdown = () => {
  const [tooltip, setTooltip] = useState<boolean>(false);

  return (
    <div className="w-ful relative bg-white p-4 md:p-6 flex flex-col justify-between rounded-2xl h-full">
      {tooltip && (
        <div className="absolute right-12 -top-4 bg-red-100 p-3 text-black rounded-md">
          hi there
        </div>
      )}
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-medium">Breakdown</h4>
          <div className=" bg-inherit">
            <div
              onMouseEnter={() => setTooltip(true)}
              onMouseLeave={() => setTooltip(false)}
              className=" cursor-pointer"
            >
              <FiInfo size={24} className="text-gray-900" />
            </div>
          </div>
        </div>
        <h6 className=" text-gray-900 mt-2">
          A transparent breakdown in piechart form
        </h6>
      </div>

      <div className="mx-auto mt-5">
        <PieCharts />
      </div>

      <ul className=" mt-9 flex flex-col gap-4">
        {breakdown.map((list) => (
          <li key={list.color} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div
                style={{ backgroundColor: `${list.color}` }}
                className={`w-3 h-3 bg-red-400 `}
              ></div>
              <p className="">{list.label}</p>
            </div>
            <div>-</div>
            <p className=" font-semibold">{list.percentage}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PieChartBreakdown;
