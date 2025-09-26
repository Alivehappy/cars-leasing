const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");
tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});
function open(evt) {
  const tabTarget = evt.currentTarget;
  tabItem.forEach(function (item) {
    item.classList.remove("tabs__btn-item--active");
  });
  tabTarget.classList.add("tabs__btn-item--active");
}


//evt.currentTarget - это элемент, на котором висит обработчик события.
//classList - свойство, которое позволяет работать с классами элемента
/*// Добавить класс
element.classList.add('active');

// Удалить класс  
element.classList.remove('active');

// Переключить класс (добавить если нет, удалить если есть)
element.classList.toggle('active');

// Проверить есть ли класс
if (element.classList.contains('active')) {
    // делаем что-то
}*/
//"Скажи этой кнопке: когда на тебя нажмут - выполни команду 'open'"
const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
