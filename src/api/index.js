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

export async function createAuthor(
  city,
  country,
  email,
  id,
  name,
  originalId,
  state,
  streetAddress,
  zip,
  token
) {
  try {
    const response = await fetch(`${baseUrl}/authors`, {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
        authorization: token,
      },
      body: JSON.stringify({
        post: {
          city,
          country,
          email,
          id,
          name,
          originalId,
          state,
          streetAddress,
          zip,
        },
      }),
    });
    const result = response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function createBook(
  coverPriceRoyalty,
  id,
  initialSales,
  originalId,
  title,
  token
) {
  try {
    const response = await fetch(`${baseUrl}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
        authorization: token,
      },
      body: JSON.stringify({
        post: {
          coverPriceRoyalty,
          id,
          initialSales,
          originalId,
          title,
        },
      }),
    });
    const result = response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
