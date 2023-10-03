const baseUrl = "https://boroughs-back-end-346863d497fb.herokuapp.com/api";

export async function getFiles(token) {
  try {
    const response = await fetch(`${baseUrl}/files`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    const files = await response.json();
    console.log(files);
    return files;
  } catch (error) {
    console.error(error);
  }
}
