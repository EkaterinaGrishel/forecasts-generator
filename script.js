/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const forecastButton = document.querySelector('.forecast-btn');
const forecastsLast = document.querySelector('.forecasts');
const forecastItemTemplate = document.querySelector('#forecast-item');
const currentForecastTitle = document.querySelector('.current-forecast h1');
const currentForecastPercent = document.querySelector('.current-forecast p');

const forecast1 = "Всё будет хорошо!";
const forecast2 = "Ты найдёшь вещь, которую потеряла!";
const forecast3 = "Тебя ждёт умопомрачительный вечер!";
const forecast4 = "Вечером тебя ожидает приятный сюрприз!";

const generateRandomValue = (min, max) => {
  return +((Math.random() * (max - min)) + min).toFixed(0);
};


const makeItemTemplate = (title, percent) => {
  const lastItemForecast = forecastItemTemplate.content.cloneNode(true);
  lastItemForecast.querySelector('h3').textContent = title;
  lastItemForecast.querySelector('p').textContent = percent;
  if (title !== '' && percent !== '') {
  forecastsLast.prepend(lastItemForecast);
}
  return lastItemForecast;
};

forecastButton.addEventListener('click', function() {
const forecast = generateRandomValue(1, 4);
const percent = generateRandomValue(1, 100);
makeItemTemplate(currentForecastTitle.textContent, currentForecastPercent.textContent);

currentForecastPercent.textContent = `Вероятность: ${percent}%`;

 if (forecast  === 1) {
 currentForecastTitle.textContent = forecast1;
 }  
 else if (forecast  === 2) {
 currentForecastTitle.textContent = forecast2;
 }
 else if (forecast  === 3) {
  currentForecastTitle.textContent = forecast3;
 }
 else {
 currentForecastTitle.textContent = forecast4;
 }
});
