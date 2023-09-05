const baseUrl = "https://boroughs-back-end-346863d497fb.herokuapp.com/api";

export async function getAuthors(token) {
  try {
    const response = await fetch(`${baseUrl}/authors`, {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
        authorization: token,
      },
    });
    const authors = await response.json();
    console.log(authors);
    return authors;
  } catch (error) {
    console.error(error);
  }
}

export async function getBooks(token) {
  try {
    const response = await fetch(`${baseUrl}/books`, {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
        authorization: token,
      },
    });
    const books = await response.json();
    console.log(books);
    return books;
  } catch (error) {
    console.error(error);
  }
}
