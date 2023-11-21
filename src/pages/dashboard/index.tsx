import EChartsComponent from "@/components/BarChart";
import Layout from "@/dashboard-components/layout";
import PieChartBreakdown from "@/dashboard-components/piechart_component";
import DashboardTitle from "@/dashboard-components/title";
import TransactionHistory from "@/dashboard-components/transactions";
import React from "react";

const Dashboard = () => {
  return (
    <Layout>
      <div className="h-screen">
        <div className=" container mx-auto px-4 md:px-0">
          <DashboardTitle
            title="Hi Emmanuel"
            description="Welcome to Metrika, discover your tailored dashboard..."
          />

          <div className="w-full px-4 md:px-0 mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-3">
            <div className="bg-white p-6 h-full rounded-xl">
                <EChartsComponent/>
            </div>
             
            </div>
            <div className="md:col-span-2 h-full">
              <PieChartBreakdown/>
            </div>
            <div className="md:col-span-5 mt-6 overflow-x-auto">
              <h4 className=" text-xl font-medium">
                Transaction history
              </h4>
              <TransactionHistory />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
