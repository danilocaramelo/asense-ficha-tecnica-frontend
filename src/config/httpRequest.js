import axios from "axios";

const _instance = null;

const getInstance = () => {
  if (_instance !== null) return _instance;

  const newInstance = axios.create({
    // baseURL: "https://asense-ficha-tecnica.herokuapp.com",
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      // "Access-Control-Allow-Headers":
        // "Origin, X-Requested-With, Content-Type, Accept",
    },
  });

  newInstance.defaults.timeout = 1000 * 20;

  return newInstance;
};

export default getInstance();
