const baseUrl = "https://boroughs-back-end-346863d497fb.herokuapp.com/api";

export async function getRecords(token) {
  try {
    const response = await fetch(`${baseUrl}/records`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
    });
    const records = await response.json();
    console.log(records);
    return records;
  } catch (error) {
    console.error(error);
  }
}
