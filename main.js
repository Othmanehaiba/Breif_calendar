const days_name = document.querySelectorAll(".days_name");
const popUp = document.querySelector(".pop_up");
const day = document.querySelector(".milieu_calendar");
let cancel = document.getElementById("cancel");
// const name = document.getElementById(name)

const weekend = document.querySelector("#d6");



day.addEventListener("click", () => {
  popUp.style.display = "block";
});
cancel.addEventListener('click', function(){
  popUp.style.display = "none"
})

//Local storage 
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const sexeInput = document.getElementById("sexe");
const profileForm = document.querySelector("#profileForm");
const profilesTbody = document.querySelector("#profilesTbody");


