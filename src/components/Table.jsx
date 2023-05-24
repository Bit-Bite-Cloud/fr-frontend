"use client";

import React from "react";
import Image from "next/image";

const Table = ({ data, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!Array.isArray(data)) {
    return <p>No data available.</p>;
  }

  return (
    <div className="flex relative pl-8">
      <table className="shadow-xl mt-[2%] mb-[3%] divide-y ">
        <thead className="text-center uppercase bg-gray-200 sticky">
          <tr className="">
            <th className="p-10 sticky">Picture</th>
            <th className="p-10 sticky">Details</th>
            <th className="p-10">Name</th>
            <th className="p-10">Longitude and Latitude</th>
            <th className="p-10">Created At</th>
            <th className="p-10">Created By</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((item, index) => (
            <tr key={index} className="border-b-2">
              {Object.values(item).map((value, index) => (
                <td key={index} className="p-10">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;


// const Table = ({ data }) => {
//   return (
//     <div className="flex relative pl-8">
//       <table className="shadow-xl mt-[2%] mb-[3%] divide-y w-[90%] ">
//         <thead className="text-center uppercase bg-gray-200">
//           <tr className="">
//             <th className="p-10">Picture</th>
//             <th className="p-10">Name</th>
//             <th className="p-10">Longitude and Latitude</th>
//             <th className="p-10">Created At</th>
//             <th className="p-10">Created By</th>
//             <th className="p-10">Details</th>
//           </tr>
//         </thead>
//         <tbody className="text-center">
//           {data.map((item, index) => (
//             <tr key={index} className="border-b-2">
//               {Object.values(item).map((value, index) => (
//                 <td key={index} className="p-10">{value}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;
