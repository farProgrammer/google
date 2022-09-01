import React from "react";
import { Link } from "react-router-dom";

import { Search } from "./Search";

export const Navbar = ({ setDarkTheme, darkTheme }) => (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
    <div className="flex justify-between items-center space-x-5 w-screen ">
      <Link to="/">
        <img
          className="searchPage__logo"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
          style={{
            "object-fit": "contain",
            height: "50px",
            "margin-right": "50px",
          }}
        />
        {/* <p className="text-2xl bg-yellow-300 font-bold text-white py-2 px-3  rounded dark:bg-gray-50 dark:text-gray-900">
          MyGoogle🔎
        </p> */}
      </Link>
      <button
        type="button"
        onClick={() => setDarkTheme(!darkTheme)}
        // className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-gray border rounded-full px-2 py-1 hover:shadow-lg"
      >
        {darkTheme ? "🌞 Light" : " 🌛 Dark"}
      </button>
    </div>
    <Search />
  </div>
);
