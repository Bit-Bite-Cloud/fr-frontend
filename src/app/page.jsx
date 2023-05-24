
// import React from 'react'
// import '/src/components/Table.jsx'
// import Table from '@components/Table'
// import '/src/components/Details.jsx'
// import Details from '@components/Details'
// import { Link } from 'next/link';


// const Home = () => {
//     const tableData = [
//         {
//           Picture: (
//             <img
//               src="https://images.squarespace-cdn.com/content/v1/5a5d10ae2aeba5215249a42b/1575268967567-OLC19H15NW65GMK6WQ9A/Maplepaw.jpg"
//               alt="Picture 1"
//               className="object-cover h-24 w-24"
//             />
//           ),
//           "Name": "John Doe",
//           "Longitude and Latitude": "40.7128° N, -74.0060° W",
//           "Created At": "2023-05-21 10:15 AM",
//           "Created By": "Admin",
//           Details: (
//             <a href="/details">
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-[12px]">
//                 View Details
//               </button>
//             </a>
//           ),
//         },
//         {
//         Picture: (
//             <img
//               src="https://example.com/image.jpg"
//               alt="Picture 2"
//               className="object-cover h-24 w-24"
//             />
//           ),
//           Name: "Jane Smith",
//           "Longitude and Latitude": "37.7749° N, -122.4194° W",
//           "Created At": "2023-05-22 2:30 PM",
//           "Created By": "User",
//           Details: (
//             <a href="/details">
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-[12px]">
//                 View Details
//               </button>
//             </a>
//           ),
//         },
//         {
//             Picture: (
//                 <img
//                   src="https://example.com/image.jpg"
//                   alt="Picture 2"
//                   className="object-cover h-24 w-24"
//                 />
//               ),
//               Name: "Jane Smith",
//               "Longitude and Latitude": "37.7749° N, -122.4194° W",
//               "Created At": "2023-05-22 2:30 PM",
//               "Created By": "User",
//               Details: (
//                 <a href="/details">
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-[12px]">
//                 View Details
//               </button>
//             </a>
//               ),
//             },
//             {
//                 Picture: (
//                     <img
//                       src="https://example.com/image.jpg"
//                       alt="Picture 2"
//                       className="object-cover h-24 w-24"
//                     />
//                   ),
//                   Name: "Jane Smith",
//                   "Longitude and Latitude": "37.7749° N, -122.4194° W",
//                   "Created At": "2023-05-22 2:30 PM",
//                   "Created By": "User",
//                   Details: (
//                     <a href="/details">
//                       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-[12px]">
//                         View Details
//                       </button>
//                     </a>
//                   ),
//                 },
//       ];
//   return (
//     <div>
//       <Table data={tableData} />
//     </div>
    
  
//   )
// }

// export default Home

'use client'

import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import Pagination from '../components/pagination';
import axios from 'axios';

const Home = () => {

      const tableData = [
        {
          Picture: (
            <img
              src="https://images.squarespace-cdn.com/content/v1/5a5d10ae2aeba5215249a42b/1575268967567-OLC19H15NW65GMK6WQ9A/Maplepaw.jpg"
              alt="Picture 1"
              className="object-cover h-24 w-24"
            />
          ),
          Details: (
            <a href="/details">
              <button className="details-button">
                View Details
              </button>
            </a>
          ),
          "Name": "John Doe",
          "Longitude and Latitude": "40.7128° N, -74.0060° W",
          "Created At": "2023-05-21 10:15 AM",
          "Created By": "Admin"
        },
        
      ];

  const [data, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <Table data={tableData} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;