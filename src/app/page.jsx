
import React from 'react'
import '/src/components/Table.jsx'
import Table from '@components/Table'
import '/src/components/Details.jsx'
import Details from '@components/Details'

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
          "Name": "John Doe",
          "Longitude and Latitude": "40.7128° N, -74.0060° W",
          "Created At": "2023-05-21 10:15 AM",
          "Created By": "Admin",
          Details: (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-[12px]">
              View Details
            </button>
          ),
        },
        {
        Picture: (
            <img
              src="https://example.com/image.jpg"
              alt="Picture 2"
              className="object-cover h-24 w-24"
            />
          ),
          Name: "Jane Smith",
          "Longitude and Latitude": "37.7749° N, -122.4194° W",
          "Created At": "2023-05-22 2:30 PM",
          "Created By": "User",
          Details: (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-[12px]">
              View Details
            </button>
          ),
        },
        {
            Picture: (
                <img
                  src="https://example.com/image.jpg"
                  alt="Picture 2"
                  className="object-cover h-24 w-24"
                />
              ),
              Name: "Jane Smith",
              "Longitude and Latitude": "37.7749° N, -122.4194° W",
              "Created At": "2023-05-22 2:30 PM",
              "Created By": "User",
              Details: (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-[12px]">
                  View Details
                </button>
              ),
            },
            {
                Picture: (
                    <img
                      src="https://example.com/image.jpg"
                      alt="Picture 2"
                      className="object-cover h-24 w-24"
                    />
                  ),
                  Name: "Jane Smith",
                  "Longitude and Latitude": "37.7749° N, -122.4194° W",
                  "Created At": "2023-05-22 2:30 PM",
                  "Created By": "User",
                  Details: (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-[12px]">
                      View Details
                    </button>
                  ),
                },
      ];
  return (
    <div>
      <Table data={tableData} />
    </div>
    
  
  )
}

export default Home