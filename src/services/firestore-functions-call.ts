import axios from "axios";

const prodBaseAddress =
  "https://us-central1-krivi-criative-trial.cloudfunctions.net/api";

//const baseAddress = "http://localhost:5001/krivi-criative-trial/us-central1/api";

export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${prodBaseAddress}/category/all`, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllProductsFromCategory = async (category: string) => {
  try {
    const response = await axios.get(`${prodBaseAddress}/products/all`, {
      params: {
        category,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
