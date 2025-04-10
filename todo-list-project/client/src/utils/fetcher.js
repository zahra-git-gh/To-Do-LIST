import axios from "axios";

export const getData = async (url, token) => {
  try {
    const response = await axios.get(url, {
      headers: {
        token: token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error.name || error.response.data.msg);
  }
};

export const postData = async (url, data, token = null) => {
  try {
    const response = await axios.post(
      url,
      data,
      token && {
        headers: {
          token: token,
          Accept: "application/json, text/plain, /",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || error.response.data.error.name
    );
  }
};
export const updateData = async (url, data, token) => {
  try {
    const response = await axios.patch(url, data, {
      headers: {
        token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || error.response.data.msg);
  }
};

export const deleteData = async (url, token) => {
  try {
    const response = await axios.delete(url, {
      headers: {
        token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || error.response.data.msg);
  }
};
