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

export async function getAuthorById(token, id) {
  try {
    const response = await fetch(`${baseUrl}/authors/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
        authorization: token,
      },
    });
    const author = await response.json();
    console.log(author);
    return author;
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
        city,
        country,
        email,
        id,
        name,
        originalId,
        state,
        streetAddress,
        zip,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function updateAuthor(
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
    const response = await fetch(`${baseUrl}/authors/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application.json",
        authorization: token,
      },
      body: JSON.stringify({
        city,
        country,
        email,
        id,
        name,
        originalId,
        state,
        streetAddress,
        zip,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
