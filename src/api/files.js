const baseUrl = "https://boroughs-back-end-346863d497fb.herokuapp.com/api";

export async function getFiles(token, id) {
  try {
    const response = await fetch(`${baseUrl}/quarterlyReport/${id}/files`, {
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

export async function createFile(filename, id, token) {
  try {
    const response = await fetch(`${baseUrl}/quarterlyReport/${id}/files`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        filename,
        id,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getFileById(token, id, fileId) {
  try {
    const response = await fetch(
      `${baseUrl}/quarterlyReport/${id}/files/${fileId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      }
    );
    const file = await response.json();
    console.log(file);
    return file;
  } catch (error) {
    console.error(error);
  }
}
