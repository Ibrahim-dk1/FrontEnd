// src/components/Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
};

export default Layout;
