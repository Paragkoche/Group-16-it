"use client";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const { isAuthenticated, setIsAuthenticated, data, setData } = useAuth();
  const handleLogout = () => {
    setIsAuthenticated(false);
    redirect("/");
  };
  return (
    <div>
      {!isAuthenticated ? (
        <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
          <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
            <div className="text-indigo-500 md:order-1">
              <h1 className="font-bold">GROUP-16-IT</h1>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
          <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
            <div className="text-indigo-500 md:order-1">
              <h1 className="font-bold">GROUP-16-IT</h1>
            </div>
            <div className="text-gray-500 order-3 w-full md:w-auto md:order-2 flex font-semibold justify-between">
              <Link
                className={clsx("md:px-4 md:py-2 hover:text-indigo-400", {
                  "text-indigo-500": pathname === "/dashboard",
                })}
                href={"/dashboard"}
              >
                Dashboard
              </Link>
              <Link
                className={clsx("md:px-4 md:py-2 hover:text-indigo-400", {
                  "text-indigo-500": pathname === "/upload-files",
                })}
                href={"/upload-files"}
              >
                Upload Files
              </Link>
              <Link
                className={clsx("md:px-4 md:py-2 hover:text-indigo-400", {
                  "text-indigo-500": pathname === "/delete-account",
                })}
                href={"/delete-account"}
              >
                Delete Account
              </Link>
            </div>
            <div className="order-2 md:order-3">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2"
              >
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
