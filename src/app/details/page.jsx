"use client"

import React from "react";
import Data from "../data";

const Details = () => {
  const { picture, name, latitude, longitude, createdAt, createdBy, description } = Data;

  return (
    <div className="my-10 mx-10">
      <a href="/">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded shadow mb-7">
          Back
        </button>
      </a>
      <div className="bg-white rounded-lg shadow-xl flex items-center">
        <div className="w-[40%]">
          <img src={picture} alt="Picture 1" className="object-cover p-8" />
        </div>
        <div className="w-1/2 p-8">
          <h1 className="text-4xl mb-4">{name}</h1>
          <div className="divide-y-2">
            <p className="my-[2%] pt-[2%]"> <span className="font-semibold">Latitude:</span> {latitude}</p>
            <p className="my-[2%] pt-[2%]"> <span className="font-semibold">Longitude:</span> {longitude}</p>
            <p className="my-[2%] pt-[2%]"> <span className="font-semibold">Created At:</span> {createdAt}</p>
            <p className="my-[2%] pt-[2%]"> <span className="font-semibold">Created By:</span> {createdBy}</p>

            <div className="my-[2%] pt-[2%]">
              <p className="font-semibold text-[20px]">Description:</p>
              <p className="text-gray-800 text-justify pt-[2%]">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
