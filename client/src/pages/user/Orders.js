import React from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";

const Orders = () => {
  return (
<Layout title={"Your Orders"}>
  <div className="container mx-auto p-8 bg-gray-100  rounded-md shadow-md">
    <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/6 mr-4 mb-4 lg:mb-0">
        <UserMenu />
      </div>
      <div className="lg:w-5/6">
        <h1 className="text-3xl font-bold text-center mb-6">Your Orders</h1>
        <div className="w-full">
          {/* Order List goes here */}
          {/* ... */}
        </div>
      </div>
    </div>
  </div>
</Layout>
  );
};

export default Orders;
