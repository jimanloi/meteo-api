import fetchData from '../api-calls/data.js';
import createCards from '../components/createCards.js';

const loadHandler = async (): Promise<void> => {
  const meteoData = await fetchData();
  createCards(meteoData);
};

export default loadHandler;
