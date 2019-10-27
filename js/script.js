var btn = document.querySelector(".search-main");
var popup = document.querySelector(".popup");
var date = popup.querySelector("[name=check-in]");
var btn = document.querySelector(".search-main");
var form = document.querySelector("form");

btn.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("visually-hidden");
  popup.classList.remove("popup-animation");
  date.focus();
})

btn.addEventListener("dblclick", function(evt) {
  evt.preventDefault();
  popup.classList.remove("visually-hidden");
})
window.addEventListener("keydown", function(evt) { /*закрываем попап по esc*/
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup")) {
      evt.preventDefault();
      popup.classList.add("visually-hidden");
        }
    }
})
btn.addEventListener("click", function(evt){
  if (popup.classList.contains("popup")){
    evt.preventDefault();
    popup.classList.add("popup-animation");
    }
})

form.addEventListener("submit", function (evt) {
  if (!date.value)
  evt.preventDefault();
  popup.classList.add("popup-err");
})

/*Вопрос: Как сделать, что окно скрывалось на второй клик? Не могу понять, как использовать classToogle*/