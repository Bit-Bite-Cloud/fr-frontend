"use client";

import React from "react";
import Image from "next/image";

const Table = ({ data }) => {
  return (
    <div className="flex justify-center relative">
      <table className="border-separate [border-spacing:5.0rem] shadow-xl sm:rounded-lg my-[3%] px-2">
        <thead className="text-center uppercase">
          <tr className="border-b-1">
            <th>Picture</th>
            <th>Name</th>
            <th>Longitude and Latitude</th>
            <th>Created At</th>
            <th>Created By</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
