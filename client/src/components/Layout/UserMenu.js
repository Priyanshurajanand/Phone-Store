import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div className="text-center">
      <div className="list-group">
        <NavLink to="/dashboard/user">
          <h4 className="text-lg font-bold mb-4">User Dashboard</h4>
        </NavLink>
        <NavLink
          to="/dashboard/user/profile"
          className="list-group-item list-group-item-action mb-2 px-4 py-2 rounded-md hover:bg-gray-500"
          activeClassName="bg-blue-500 text-white"
        >
          Profile Update
        </NavLink>
        <NavLink
          to="/dashboard/user/orders"
          className="list-group-item list-group-item-action mb-2 px-4 py-2 rounded-md hover:bg-gray-500"
          activeClassName="bg-blue-500 text-white"
        >
          Order Details
        </NavLink>
      </div>
    </div>
  );
};

export default UserMenu;
