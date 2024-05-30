"use client";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, data, setData } = useAuth();

  return (
    <div>
      {!isAuthenticated ? (
        <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
          <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
            <div className="text-indigo-500 md:order-1">
              <h1>Login Page</h1>
            </div>
            <div className="order-2 md:order-3">
              <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                Login
              </button>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
          <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
            <div className="text-indigo-500 md:order-1">
              <h1>Dashboard</h1>
            </div>
            <div className="order-2 md:order-3">
              <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                Logout
              </button>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
