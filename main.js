let heureD = document.getElementById("heureDebut");
let heureF = document.getElementById("heureFin");
let nbrPersonne = document.getElementById("nbrPersonne");
let typeReservation = document.getElementById("typeReservation");
let form = document.querySelector(".formulaire");
const popUp = document.querySelector(".pop_up");
let cancel = document.getElementById("cancel");
let curr_day = null;


popUp.style.display = "none";


let days = document.querySelectorAll(".days");

// When user clicks a day, show popup and save clicked day
days.forEach(day => {
  day.addEventListener("click", () => {
    popUp.style.display = "block";
    curr_day = day; // store the clicked day
  });
});

// When user clicks "Annuler"
cancel.addEventListener("click", function () {
  popUp.style.display = "none";
});

// When form is submitted
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  if (!curr_day) return; // safety check

  // Create a div for reservation info
  let afficher = document.createElement("div");
  afficher.classList.add("affichage");
  afficher.textContent = name; // add name text

  // Append inside the clicked day
  curr_day.appendChild(afficher);

  // Reset and close popup
  form.reset();
  popUp.style.display = "none";
});
