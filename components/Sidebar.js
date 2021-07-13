import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);

  return (
    <div>
      <div className="w-full h-full">
        <div className="flex flex-no-wrap">
          {/* Sidebar starts */}
          <div className="absolute w-64 lg:1/4 p-10 h-screen shadow-xl bg-white hidden lg:block">
            <div className="h-16 w-full flex items-center px-8">
              <img src="/assets/logo/logo.svg" />
            </div>
            <ul aria-orientation="vertical" className="bg-white rounded py-6">
              <li
                className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                onClick={() => setMenu1(!menu1)}
              >
                <Link href="/Question1">
                  <div className="flex items-center">
                    <img src="/assets/icon/Q1.svg" />
                    <span className="ml-2">Question 1</span>
                  </div>
                </Link>
              </li>
              <li
                className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                onClick={() => setMenu3(!menu3)}
              >
                <Link href="/Question2">
                  <div className="flex items-center">
                    <img src="/assets/icon/Q2.svg" />
                    <span className="ml-2">Question 2</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Sidebar ends */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
