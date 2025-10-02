import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSidebar } from "../context/SidebarContext";

const Layout = () => {
  const { sidebar } = useSidebar();

  return (
    <div className="flex w-full overflow-hidden min-h-screen">
      <aside
        className={`hidden md:block fixed left-0 top-0 h-screen transition-all duration-300 ${
          sidebar ? "w-[14.75rem]" : "w-[5rem]"
        }`}
      >
        <Sidebar />
      </aside>

      {/* Main content area */}
      <div
        className={`flex-1 w-full transition-all duration-300 ${
          sidebar ? "md:ml-[14.75rem]" : "md:ml-[5rem]"
        }`}
      >
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
