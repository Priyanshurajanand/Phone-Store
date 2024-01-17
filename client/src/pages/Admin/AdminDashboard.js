import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
<Layout>
  <div className="container mx-auto  p-8 bg-gray-100 rounded-md shadow-md">
    <div className="flex flex-col lg:flex-row ">
      <div className="lg:w-1/6 mb-4 mr-4 lg:mb-0">
        <AdminMenu />
      </div>
      <div className="lg:w-3/4 p-4 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-6">Admin Information</h2>
        <div className="border-b border-gray-300 mb-6 pb-4">
          <p className="text-lg">
            <span className="font-bold text-gray-700">Admin Name:</span>{" "}
            {auth?.user?.name}
          </p>
        </div>
        <div className="border-b border-gray-300 mb-6 pb-4">
          <p className="text-lg">
            <span className="font-bold text-gray-700">Admin Email:</span>{" "}
            {auth?.user?.email}
          </p>
        </div>
        <div>
          <p className="text-lg">
            <span className="font-bold text-gray-700">Admin Contact:</span>{" "}
            {auth?.user?.phone}
          </p>
        </div>
      </div>
    </div>
  </div>
</Layout>


  );
};

export default AdminDashboard;
