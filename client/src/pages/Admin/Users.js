import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";

const Users = () => {
  return (
<Layout title={"Dashboard - All Users"}>
  <div className="container mx-auto  p-8 bg-gray-100 rounded-md shadow-md">
    <div className="flex flex-col lg:flex-row ">
      <div className="lg:w-1/6 mr-4 mb-4 lg:mb-0">
        <AdminMenu />
      </div>
      <div className="lg:w-3/4">
        <h1 className="text-3xl font-bold text-center mb-6">All Users</h1>
        <div className="w-full">
          {/* User List goes here */}
          {/* ... */}
        </div>
      </div>
    </div>
  </div>
</Layout>

  );
};

export default Users;
