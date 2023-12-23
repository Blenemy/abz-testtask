import axios from "axios";

export async function getUsers(
  currentPage: number = 1,
  numberOfUsers: number = 6
) {
  const response = await axios.get(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${currentPage}&count=${numberOfUsers}`
  );

  return response;
}
