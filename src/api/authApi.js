import axios from "axios";

export const loginUser = async (credentials) => {
  const response = await axios.post(
    "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin",
    credentials,
  );

  return response.data;
};
