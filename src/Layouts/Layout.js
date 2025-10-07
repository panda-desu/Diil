import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";
import { useSidebar } from "../context/SidebarContext";

const Layout = () => {
  const { sidebar, setSidebar } = useSidebar();

  return (
    <div className="flex w-full overflow-hidden min-h-screen">
      {/* Desktop Sidebar - fixed on left */}
      <aside
        className={`hidden lg:block fixed left-0 top-0 h-screen transition-all duration-300 z-30 ${
          sidebar ? "w-[14.75rem]" : "w-[5rem]"
        }`}
      >
        <Sidebar />
      </aside>

      {/* Mobile/Tablet Sidebar - slides from right */}
      <aside
        className={`lg:hidden fixed right-0 top-0 h-screen transition-transform duration-300 z-50 ${
          sidebar ? "translate-x-0" : "translate-x-full"
        } w-[14.75rem]`}
      >
        <Sidebar />
      </aside>

      {/* Overlay for mobile/tablet when sidebar is open */}
      {sidebar && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebar(false)}
        />
      )}

      {/* Main content area */}
      <div
        className={`flex-1 w-full transition-all duration-300 ${
          sidebar ? "lg:ml-[14.75rem]" : "lg:ml-[5rem]"
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
