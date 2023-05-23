import React from "react";

const Details = () => {
  return (
    <div className=" my-10 mx-10">
      <a href="/">
      <button className="bg-gray-300 hover:bg-gray-400  text-gray-800 font-bold py-2 px-4 rounded shadow mb-7">
        Back
      </button>
      </a>
      <div className="bg-white rounded-lg shadow-xl flex items-center">
        <div className="w-1/2 my-[3%] flex justify-center">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5a5d10ae2aeba5215249a42b/1575268967567-OLC19H15NW65GMK6WQ9A/Maplepaw.jpg"
            alt="Picture 1"
            className="object-cover h-4/6 w-4/6 rounded-2xl"
          />
        </div>
        <div className="inline-block align-middle">
          <h1 className="text-[50px]">Name</h1>
          <div className="flex justify-between m-2">
            <p className="mr-4">Longitude and Latitude</p>
            <p className="mr-4">Created At</p>
            <p className="mr-4">Created By</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
