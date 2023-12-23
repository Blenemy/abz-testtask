export async function getToken() {
  const response = await fetch(
    "https://frontend-test-assignment-api.abz.agency/api/v1/token"
  );
  const data = await response.json();
  return data.token;
}
