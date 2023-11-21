

import Image from "next/image";
import React from "react";

const TransactionHistory = () => {
  const data = [
    {
      id: 1,
      caseName:
        "Building Trust in Blockchain",
      date: "August 25, 2013",
      contribution: {
        title: "Product",
      },
      ValueInDollars: "200",
    },
    {
      id: 2,
      caseName:
        "Building Trust in Blockchain",
      date: "August 25, 2013",
      contribution: {
        title: "Product",
      },
      ValueInDollars: "200",
    },
    {
      id: 3,
      caseName:
        "Building Trust in Blockchain",
      date: "August 25, 2013",
      contribution: {
        title: "Product",
      },
      ValueInDollars: "200",
    },
  ];

  return (
    <div className=" mx-auto shadow-sm w-[90vh] md:w-full my-9 rounded-xl">
      <table className="rounded-xl w-full">
        <thead className=" border-b bg-gray-200 h-16 rounded-tr-xl flex-1 rounded-tl-xl pb-9">
          <tr className=" ">
            <th className="pr-4">
              <p className=" font-semibold text-gray-500">
                Name
              </p>
            </th>
            <th className="pr-4 w-32 mr-auto">
              <p className=" font-semibold text-gray-500">
                Sales
              </p>
            </th>
            <th className="pr-4">
              <p
                className="hidden md:block font-semibold text-gray-500"
              >
                Transaction date
              </p>
              <p
                className=" md:hidden block font-semibold text-gray-500"
              >
                Date
              </p>
            </th>
            <th className="pr-4">
              <p className=" font-semibold text-gray-500">
                Amount
              </p>
            </th>
          </tr>
        </thead>
        <tbody className="my-4 p-6 bg-white">
          {data.length === 0 ? (
            <div>No transactions yet!</div>
          ) : (
            data.map((item) => (
              <tr key={item.id} className="py-4 border-b mb-8">
                <td className="w-72 mx-auto py-4 text-center text-base font-medium text-gray-600">
                  <p>
                    {typeof item.caseName === "string"
                      ? item.caseName.slice(0, 50).concat("...")
                      : item.caseName}
                  </p>
                </td>
                <td className="w-32 mx-auto py-4 flex items-center gap-3 justify-center">
                 
                  <p
                    className=" text-center text-base font-medium text-gray-600 font-red-ha"
                  >
                    {item.contribution.title}
                  </p>
                </td>
                <td className="w-32 mx-auto py-4 text-center text-base font-medium text-gray-600">
                  {item.date}
                </td>
                <td className="w-32 mx-auto py-4 text-center text-base font-medium text-gray-600">
                  {item.ValueInDollars}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
