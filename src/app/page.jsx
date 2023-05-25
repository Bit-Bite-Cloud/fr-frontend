"use client";

import React, { useState, useEffect } from "react";
import Data from "../app/data.json";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if(currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="container mt-5">
      <div className="flex relative pl-8 overflow-scroll w-[110%]">
        <table className="shadow-xl mt-[2%] mb-[3%] divide-y">
          <thead className="text-center uppercase bg-gray-200">
            <tr className="">
              <th className="p-7 sticky">Picture</th>
              <th className="p-7 sticky">Details</th>
              <th className="p-7 w-max">Name</th>
              <th className="p-7">Latitude</th>
              <th className="p-7">Longitude</th>
              <th className="p-7">Created At</th>
              <th className="p-7">Created By</th>
              <th className="p-7">Age</th>
              <th className="p-7">Gender</th>
              <th className="p-7">Phone</th>
              <th className="p-7">Address</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {records.map((item, index) => (
              <tr key={index} className="border-b-2">
                {Object.entries(item).map(([key, value]) => {
                  if (key === "details") { 
                    return (
                      <td key={key} className="p-10">
                        <a href="/details">
                          <button className="details-button">
                            {value} 
                          </button>
                        </a>
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
        <ul className="pagination my-4">
          <li className="page-item">
            <a href="#" className="page-link"
            onClick={prePage}>Previous</a>
          </li>
          {
            numbers.map((n, index) => (
              <li className={`page-item ${currentPage == n ? 'active' : ''}`} key={index}>
                <a href="#" className="page-link"
                onClick={() => changeCPage(n)}> {n} </a>
              </li>
            ))
          }
          <li className="page-item">
            <a href="#" className="page-link"
            onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
