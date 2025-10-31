let heureD = document.getElementById("heureDebut");
let heureF = document.getElementById("heureFin");
let nbrPersonne = document.getElementById("nbrPersonne");
let typeReservation = document.getElementById("typeReservation");
let form = document.querySelector(".formulaire");
const popUp = document.querySelector(".pop_up");
let cancel = document.getElementById("cancel");
let curr_day = null;

popUp.style.display = "none";

const days = document.querySelectorAll(".days");

days.forEach((day) => {
  day.addEventListener("click", () => {
    popUp.style.display = "block";
    curr_day = day;
  });
});

cancel.addEventListener("click", function () {
  popUp.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  if (!curr_day) return;
  console.log("created by succes");
  let afficher = document.createElement("div");
  afficher.classList.add("affichage");
  afficher.textContent = name;

  curr_day.appendChild(afficher);
  console.log("appended by succes")

  form.reset();
  popUp.style.display = "none";
});


