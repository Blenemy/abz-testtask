import axios from "axios";

export async function getPositions() {
  const response = await axios.get(
    `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
  );

  return response;
}
