let heureD = document.getElementById("heureDebut");
let heureF = document.getElementById("heureFin");
let nbrPersonne = document.getElementById("nbrPersonne");
let typeReservation = document.getElementById("typeReservation");
let form = document.querySelector(".formulaire");
let hide = document.getElementById("hidden");
let submit = document.getElementById("submit");
const days_name = document.querySelectorAll(".days_name");
const popUp = document.querySelector(".pop_up");
const day = document.querySelector(".milieu_calendar");
let days = document.getElementsByClassName("days");
let cancel = document.getElementById("cancel");
// const name = document.getElementById(name)

let weekend = document.getElementById("d6");

popUp.style.display = "none";

day.addEventListener("click", () => {
  popUp.style.display = "block";
  console.log(hide);
});
cancel.addEventListener("click", function () {
  popUp.style.display = "none";
});

// weekend.addEventListener("click" , function(){
//   popUp.style.display = "none"
// })

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let afficher = document.createElement("div");
  afficher.innerHTML = `<span class= "affichage">${name}</span>`;

  let index = parseInt(hide.value);
  days[index].append(afficher);
  console.log(afficher);
});

// formulaire.addEventListener('submit' ,function(e){
//   e.preventDefault();
//
//
//
//   console.log(afficher)
// })
