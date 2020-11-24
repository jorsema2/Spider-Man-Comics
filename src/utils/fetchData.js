async function fetchData(link) {
  try {
    const result = await fetch(link)
      .then((response) => response.json())
      .then((data) => (data));
    return result;
  } catch (err) {
    console.log(err);
  }
}

export default fetchData;
