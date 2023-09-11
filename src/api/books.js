const baseUrl = "https://boroughs-back-end-346863d497fb.herokuapp.com/api";

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

export async function getBookById(token, id) {
  try {
    const response = await fetch(`${baseUrl}/books/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
        authorization: token,
      },
    });
    const book = await response.json();
    console.log(book);
    return book;
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
        coverPriceRoyalty,
        id,
        initialSales,
        originalId,
        title,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function updateBook(
  coverPriceRoyalty,
  id,
  initialSales,
  originalId,
  title,
  token
) {
  try {
    const response = await fetch(`${baseUrl}/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application.json",
        authorization: token,
      },
      body: JSON.stringify({
        coverPriceRoyalty,
        id,
        initialSales,
        originalId,
        title,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
