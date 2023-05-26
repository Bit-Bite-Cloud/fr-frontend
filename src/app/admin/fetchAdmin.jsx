import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "src/app/admin/data.json";

function MyComponent() {
  useEffect(() => {
    // Fetch API request
    axios
      .post("http://httpbin.org/anything", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred
        console.error(error);
      });
  }, []);

  return data;
}

export default MyComponent;
