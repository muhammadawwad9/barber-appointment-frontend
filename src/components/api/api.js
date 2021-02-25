import React from "react";

const api = (url, options) => {
  const server = `http://localhost:4000/`;
  const heroku = "https://barber-appointment-backend.herokuapp.com/";

  return fetch(`${heroku}${url}`, {
    ...options,
  })
    .then((response) => {
      //if (response.ok) return response.json();
      return response.json();
      /* else {
        const error = new Error("http error");
        error.status = response.status;
        throw error;
      }*/
    })
    .catch((err) => console.error(err));
};

export default api;
