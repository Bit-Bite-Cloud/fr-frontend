"use client";

import React, { useState } from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-lg">
      <form className="w-5/12">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-4 pl-10 text-sm shadow-sm rounded-lg hover:bg-gray-200 bg-gray-100 focus:outline-none"
            placeholder="Search"
            required
          />
        </div>
      </form>

      <div className="flex items-center space-x-3">
        <Image
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          className="object-contain"
        />
        <p>User</p>
      </div>
    </nav>
  );
};

export default Nav;