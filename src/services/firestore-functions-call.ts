import axios from "axios";

const prodBaseAddress =
  "https://us-central1-krivi-criative-trial.cloudfunctions.net/api";

//const baseAddress = "http://localhost:5001/krivi-criative-trial/us-central1/api";

const mockBaseAddress = "http://localhost:3030";

const activeAddress = mockBaseAddress;

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${activeAddress}/products/all`, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserProfile = async (email: string) => {
  try {
    const response = await axios.get(`${activeAddress}/profile/fetch`, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      params: {
        email,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const createUserProfile = async (profile: string) => {
  try {
    const response = await axios.post(`${activeAddress}/profile/create`, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      params: {
        profile,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const subscribeNewsLetter = async () => {
  try {
    const response = await axios.post(
      `${activeAddress}/subscribe/news-letter`,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
