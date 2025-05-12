import formatHour from '../utils/formatHour.js';
import dom from '../dom.js';

const createCards = async (data: {
  hourly: {
    temperature_2m: number[];
    time: string[];
  };
}): Promise<void> => {
  const temperatures = data.hourly.temperature_2m;
  const hours = data.hourly.time;
  const degree = '℃';
  let dayNumber = 1;

  for (let i = 0; i < hours.length; i += 24) {
    //create one card per day
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h3');
    title.innerText = 'Day ' + dayNumber;
    dayNumber += 1;

    const temps = document.createElement('div');
    temps.classList.add('day-temperatures-container');

    for (let h = 0; h < 24; h++) {
      const eachHour = document.createElement('div');
      eachHour.classList.add('eachHour-card');
      const index = i + h;

      const eachHourNumber = formatHour(hours[index]);
      const hourInfo = document.createElement('div');
      hourInfo.classList.add('hour-info');
      hourInfo.innerText = `Hour ${eachHourNumber}`;

      const eachHourTemp = temperatures[index];
      const tempInfo = document.createElement('div');
      tempInfo.classList.add('temp-info');
      tempInfo.innerText = `Temperature: ${eachHourTemp}${degree}`;

      eachHour.append(hourInfo, tempInfo);
      temps.append(eachHour);
    }
    card.append(title, temps);
    dom.container?.append(card);
  }
};

export default createCards;
