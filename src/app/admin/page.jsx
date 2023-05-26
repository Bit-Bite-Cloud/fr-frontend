"use client";

import React, { useState, useEffect } from "react";
import Data from "src/app/admin/fetchAdmin.jsx";

const Home = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const initialPage = parseInt(queryParams.get("page")) || 1;

  const data = Data();

  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="container mt-5">
      <p className="px-8 pt-5 pb-3 font-semibold text-[#556347] text-[24px]">
        Admin Dashboard
      </p>
      <div className="flex relative pl-8 overflow-scroll w-[110%]">
        <table className="shadow-xl mt-[2%] divide-y">
          <thead className="text-center uppercase bg-gray-200">
            <tr className="">
              <th className="col p-7">Created At</th>
              <th className="col p-7">Access Token</th>
              <th className="col p-7">Status</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {records.map((item, index) => (
              <tr key={index} className="border-b-2">
                {Object.entries(item).map(([key, value]) => {
                  if (key === "status") {
                    return (
                      <td key={key} className="p-10">
                        <div className="absolute">
                          <div className="relative inline-block w-10 mr-2 select-none transition duration-200 ease-in">
                            <input
                              type="checkbox"
                              name={`toggle-${index}`}
                              id={`toggle-${index}`}
                              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                              checked={value === "on"}
                              onChange={() => {
                                const updatedRecords = [...records];
                                updatedRecords[index][key] =
                                  value === "on" ? "off" : "on";
                                setRecords(updatedRecords);
                              }}
                            />
                            <label
                              htmlFor={`toggle-${index}`}
                              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                            ></label>
                          </div>
                        </div>
                      </td>
                    );
                  } else {
                    return (
                      <td key={key} className="p-10">
                        {value}
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav>
        <ul className="pagination mb-10 mt-8">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              Previous
            </a>
          </li>
          {numbers.map((n, index) => (
            <li
              className={`page-item ${currentPage == n ? "active" : ""}`}
              key={index}
            >
              <a href="#" className="page-link" onClick={() => changeCPage(n)}>
                {" "}
                {n}{" "}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
