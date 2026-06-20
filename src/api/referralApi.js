import axios from "axios";
import Cookies from "js-cookie";
const BASE_URL =
  "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals";


export const getDashboardData = async (search = "", sort = "desc") => {
  const token = Cookies.get("jwt_token");
  const response = await axios.get(BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
     params: {
      search,
      sort,
    },
  });

  return response.data;
};

export const getReferrals = async (search = "", sort = "desc") => {
 const token = Cookies.get("jwt_token");
  const response = await axios.get(BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      search,
      sort,
    },
  });

  return response.data;
};

