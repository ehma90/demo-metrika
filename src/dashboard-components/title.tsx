
import React, { FC } from "react";

interface DashboardTitleProps {
  title: string;
  description: string;
}

const DashboardTitle: FC<DashboardTitleProps> = ({ title, description }) => {
  return (
    <div className="mt-6 bg-transparent px-4 md:px-0">
      <div className="w-full max-w-lg space-y-4">
        <h1 className=" text-3xl font-medium">
          {" "}
          {title}
        </h1>
        <p className=" text-gray-500 font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DashboardTitle;
