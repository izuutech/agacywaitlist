import axios from "axios";

// const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://agacywaitlist-backend.onrender.com";

export const wakeServer = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/`);
    return res;
  } catch (error) {
    return error.response;
  }
};

export const addToWaitlist = async (values) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/emails`,
      { email: values.email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (e) {
    return e.response;
  }
};

export const fetchList = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/emails`);
    return res;
  } catch (error) {
    return error.response;
  }
};
