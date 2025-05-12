var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
import formatHour from '../utils/formatHour.js';
import dom from '../dom.js';
const createCards = (data) =>
    __awaiter(void 0, void 0, void 0, function* () {
        var _a;
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
            (_a = dom.container) === null || _a === void 0
                ? void 0
                : _a.append(card);
        }
    });
export default createCards;
