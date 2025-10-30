const days_name = document.querySelectorAll(".days_name");
const popUp = document.querySelector('.pop_up');
const day = document.querySelector(".milieu_calendar");


// const form = document.createElement("form");
// const input = document.createElement("input");
// label.textContent = "Name";
// document.body.appendChild(form);
// form.appendChild(input);
// input.setAttribute("type", "text");
// form.style.display = "none";
// for(let i = 0 ; i < day.length() ; i++){
//   day.addEventListener("click", () => {
//   popUp.classList.toggle("show");
// });
// }

day.addEventListener('click', () => {
  popUp.style.display = 'block';  
});

