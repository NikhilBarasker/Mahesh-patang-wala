import SidebarFilter from "../Components/SidebarFilter";
import { Outlet } from "react-router-dom";

export default function ProductsLayout() {
  return (
    <div className="flex">
      {/* Sidebar on the left */}
      <SidebarFilter />

      {/* Outlet will render the actual product page */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}
