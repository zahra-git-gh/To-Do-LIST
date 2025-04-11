export const getData = async (url, token) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.log(errorData);
    if (
      errorData?.error === "TokenExpiredError" ||
      errorData?.error === "Access denied" ||
      errorData?.error === "Invalid token"
    ) {
      localStorage.removeItem("token");
      window.location.reload();
      return;
    }
    throw new Error(
      errorData.message || `HTTP error! status: ${response.status}`
    );
  }

  const data = await response.json();

  return data;
};

export const postData = async (url, data, token = null) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...(token && { token }),
      },
    });

    if (!response.ok) {
      const errorData = await response.json();

      if (
        errorData?.error === "TokenExpiredError" ||
        errorData?.error === "Access denied" ||
        errorData?.error === "Invalid token"
      ) {
        localStorage.removeItem("token");
        window.location.reload();
        return;
      }

      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    const resData = await response.json();

    return resData;
  } catch (error) {
    console.error("Fetch error:", error.message);
    return error;
  }
};
export const updateData = async (url, data, token) => {
  const response = await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      token,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();

    if (
      errorData?.error === "TokenExpiredError" ||
      errorData?.error === "Access denied" ||
      errorData?.error === "Invalid token"
    ) {
      localStorage.removeItem("token");
      window.location.reload();
      return;
    }

    throw new Error(
      errorData.message || `HTTP error! status: ${response.status}`
    );
  }

  const resData = await response.json();

  return resData;
};

export const deleteData = async (url, token) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();

    if (
      errorData?.error === "TokenExpiredError" ||
      errorData?.error === "Access denied" ||
      errorData?.error === "Invalid token"
    ) {
      localStorage.removeItem("token");
      window.location.reload();
      return;
    }

    throw new Error(
      errorData.message || `HTTP error! status: ${response.status}`
    );
  }

  const resData = await response.json();

  return resData;
};
