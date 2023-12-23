import axios from "axios";
import { getToken } from "./getToken";

export async function createUser(userData: FormData) {
  const token = await getToken();
  const response = await axios.post(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users`,
    userData,
    {
      headers: {
        Token: token,
      },
    }
  );

  return response;
}
