import React from "react";

const Details = () => {
  return (
    <div className="my-10 mx-10">
  <a href="/">
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded shadow mb-7">
      Back
    </button>
  </a>
  <div className="bg-white rounded-lg shadow-xl flex items-center">
    <div className="w-[40%]">
      <img
        src="https://images.squarespace-cdn.com/content/v1/5a5d10ae2aeba5215249a42b/1575268967567-OLC19H15NW65GMK6WQ9A/Maplepaw.jpg"
        alt="Picture 1"
        className="object-cover p-8"
      />
    </div>
    <div className="w-1/2 p-8">
      <h1 className="text-4xl mb-4">Maple Maploo the Chonkyy Boii</h1>
      <div className="flex mb-4">
        <p className="mr-[20%]">Longitude and Latitude</p>
        <p className="mr-[20%]">Created At</p>
        <p className="">Created By</p>
      </div>
      <p className="text-gray-800 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus a. Mauris in aliquam sem fringilla ut morbi. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Netus et malesuada fames ac turpis egestas. Neque gravida in fermentum et sollicitudin ac orci phasellus. Risus pretium quam vulputate dignissim suspendisse in est ante. Id semper risus in hendrerit gravida rutrum quisque. Mus mauris vitae ultricies leo. Quis hendrerit dolor magna eget. Interdum varius sit amet mattis vulputate enim. Iaculis nunc sed augue lacus. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Arcu cursus vitae congue mauris rhoncus aenean vel. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Dignissim diam quis enim lobortis scelerisque fermentum dui. Odio eu feugiat pretium nibh ipsum. Faucibus pulvinar elementum integer enim neque. Et leo duis ut diam quam nulla porttitor massa. Eu sem integer vitae justo eget magna fermentum iaculis.
      </p>
    </div>
  </div>
</div>

  );
};

export default Details;
