var btn = document.querySelector(".search-main");
var popup = document.querySelector(".popup");
var date = popup.querySelector("[name=check-in]");
var form = document.querySelector("form");

btn.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("visually-hidden");
  popup.classList.toggle("popup-animation");
  date.focus();
})

window.addEventListener("keydown", function(evt) { //закрываем попап по esc
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup")) {
      evt.preventDefault();
      popup.classList.add("visually-hidden");
        }
    }
})

form.addEventListener("submit", function (evt) {
  if (!date.value)
  evt.preventDefault();
  popup.classList.remove("popup-err");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("popup-err");  
})
