const baseUrl = "https://boroughs-back-end-346863d497fb.herokuapp.com/api/";

export async function loginUser(email, password) {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: { email, password },
      }),
    });
    const result = await response.json();
  } catch (error) {
    console.error(error);
  }
}
