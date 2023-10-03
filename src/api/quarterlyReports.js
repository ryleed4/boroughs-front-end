const baseUrl = "https://boroughs-back-end-346863d497fb.herokuapp.com/api";

export async function getQuarterlyReports(token) {
  try {
    const response = await fetch(`${baseUrl}/quarterlyReports`, {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
        authorization: token,
      },
    });
    const quarterlyReports = await response.json();
    console.log(quarterlyReports);
    return quarterlyReports;
  } catch (error) {
    console.error(error);
  }
}

export async function createQuarterlyReport(
  name,
  processing,
  statementDate,
  status,
  token
) {
  try {
    const response = await fetch(`${baseUrl}/quarterlyReports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        name,
        processing,
        statementDate,
        status,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function editQuarterlyReport(
  name,
  processing,
  statementDate,
  status,
  id,
  token
) {
  try {
    const response = await fetch(`${baseUrl}/quarterlyReports/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        name,
        processing,
        statementDate,
        status,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
