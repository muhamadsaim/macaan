"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../../public/assets/logo.svg";
import IconLock from "../../public/assets/IconLock.svg"
import IconSearch from "../../public/assets/IconSearch.svg"
import IconBox from "../../public/assets/IconBox.svg"
import IconPlus from "../../public/assets/IconPlusy.svg"
import IconSettings from "../../public/assets/IconSettings.svg"
import IconRocket from "../../public/assets/IconRocket.svg"
import IconClipboardList from "../../public/assets/IconClipboardList.svg"
import IconLayoutDashboard from "../../public/assets/IconLayoutDashboard.svg"
import IconFileReport from "../../public/assets/IconFileReport.svg"
import IconBuildingFactory from "../../public/assets/IconBuildingFactory.svg"
import { IconMenu2, IconX } from "@tabler/icons-react";


const Sidebar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Sidebar Toggle Button for Mobile */}
      <div className="flex items-start justify-between p-1 bg-darkBlue md:hidden">
       
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white"
        >
          {isSidebarOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      {/* Sidebar Component */}
      <aside
        className={`fixed z-20 md:relative w-64 bg-darkBlue text-white min-h-screen flex flex-col justify-between gap-2 pt-4 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Content */}
        <div>
          {/* Sidebar Logo */}
          <div className="flex justify-center items-center pb-2">
            <Logo />
          </div>
          {/* Sidebar Links */}
          <nav>
            <ul className="space-y-2 px-4">
              <li>
                <Link
                  href="/"
                  className={`py-3 px-4 rounded-lg flex items-center gap-3 ${
                    pathname === "/" ? "bg-blue-600" : "bg-transparent"
                  }`}
                >
                  <IconLayoutDashboard size={18} />
                  <span className="text-sm font-medium">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/start-working"
                  className={`py-3 px-4 rounded-lg flex items-center gap-3 ${
                    pathname === "/start-working"
                      ? "bg-blue-600"
                      : "bg-transparent"
                  }`}
                >
                  <IconRocket size={18} />
                  <span className="text-sm font-medium">Start Working</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/my-tasks"
                  className={`py-3 px-4 rounded-lg flex items-center gap-3 ${
                    pathname === "/my-tasks" ? "bg-blue-600" : "bg-transparent"
                  }`}
                >
                  <IconClipboardList size={18} />
                  <span className="text-sm font-medium">My Task</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dead-locks"
                  className={`py-3 px-4 rounded-lg flex items-center gap-3 ${
                    pathname === "/dead-locks" ? "bg-blue-600" : "bg-transparent"
                  }`}
                >
                  <IconLock size={18} />
                  <span className="text-sm font-medium">Dead Locks</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/reports"
                  className={`py-3 px-4 rounded-lg flex items-center gap-3 ${
                    pathname === "/reports" ? "bg-blue-600" : "bg-transparent"
                  }`}
                >
                  <IconFileReport size={18} />
                  <span className="text-sm font-medium">Work Reports</span>
                </Link>
              </li>
              <hr className="my-2 border-gray-600" />
              <li>
                <Link
                  href="/explore"
                  className={`py-3 px-4 rounded-lg flex items-center gap-3 ${
                    pathname === "/explore" ? "bg-blue-600" : "bg-transparent"
                  }`}
                >
                  <IconSearch size={18} />
                  <span className="text-sm font-medium">Explore</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/model"
                  className={`py-3 px-4 rounded-lg flex items-center gap-3 ${
                    pathname === "/model" ? "bg-blue-600" : "bg-transparent"
                  }`}
                >
                  <IconBox size={18} />
                  <span className="text-sm font-medium">Model</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/category-manufacturer"
                  className={`py-3 px-4 rounded-lg flex items-center gap-3 ${
                    pathname === "/category-manufacturer"
                      ? "bg-blue-600"
                      : "bg-transparent"
                  }`}
                >
                  <IconBuildingFactory size={18} />
                  <span className="text-sm font-medium">Category / Manufacturer</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/add-parts"
                  className={`py-3 px-4 rounded-lg flex items-center gap-3 ${
                    pathname === "/add-parts" ? "bg-blue-600" : "bg-transparent"
                  }`}
                >
                  <IconPlus size={18} />
                  <span className="text-sm font-medium">Add Parts</span>
                </Link>
              </li>
              <hr className="my-2 border-gray-600" />
              <li>  <Link
            href="/settings"
            className="py-3 px-4 rounded-lg hover:bg-gray-600 flex items-center gap-3"
          >
            <IconSettings size={18} />
            <span className="text-sm font-medium">Settings</span>
          </Link></li>
            </ul>
          </nav>
        </div>
        {/* Sidebar Footer */}
        {/* <div className="p-4">
          <Link
            href="/settings"
            className="py-3 px-4 rounded-lg hover:bg-gray-600 flex items-center gap-3"
          >
            <IconSettings size={18} />
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </div> */}
      </aside>

      {/* Overlay for Mobile View */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
