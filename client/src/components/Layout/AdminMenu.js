import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <NavLink to="/dashboard/admin">
            <h4 className="text-lg font-bold mb-4">Admin Panel</h4>
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action mb-2 px-4 py-2 rounded-md hover:bg-gray-500"
            activeClassName="bg-blue-500 text-white"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action mb-2 px-4 py-2 rounded-md hover:bg-gray-500"
            activeClassName="bg-blue-500 text-white"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action mb-2 px-4 py-2 rounded-md hover:bg-gray-500"
            activeClassName="bg-blue-500 text-white"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action mb-2 px-4 py-2 rounded-md hover:bg-gray-500"
            activeClassName="bg-blue-500 text-white"
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
