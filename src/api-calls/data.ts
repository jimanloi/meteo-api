const fetchData = async (): Promise<any> => {
  const URL =
    'https://api.open-meteo.com/v1/forecast?latitude=51.2089&longitude=3.2242&hourly=temperature_2m&forecast_days=10';
  const encodedURL = encodeURI(URL);

  const meteoData = await fetch(encodedURL);

  if (!meteoData.ok) {
    throw new Error(`HTTP Error :${meteoData.status}`);
  }
  return meteoData.json();
};

export default fetchData;
