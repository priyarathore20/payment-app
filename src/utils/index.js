import axios from "axios";

//defining base url
const baseURL = "http://localhost:8000/";

// Create Axios instance
const instance = axios.create({
  baseURL,
  timeout: 10000, // Adjust timeout as needed
});

export default instance;
