import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";
import { useSidebar } from "../context/SidebarContext";

const Layout = () => {
  const { sidebar, setSidebar } = useSidebar();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // phone/tablet
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine if header should be hidden
  const hideHeader = isMobile && location.pathname.startsWith("/chat");

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
        {/* Header will hide if on chat page on phone */}
        {!hideHeader && <Header />}

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
