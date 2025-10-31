let heureD = document.getElementById("heureDebut");
let heureF = document.getElementById("heureFin");
let nbrPersonne = document.getElementById("nbrPersonne");
let typeReservation = document.getElementById("typeReservation");
let form = document.querySelector(".formulaire");
let hide = document.getElementById("hidden")
let submit = document.getElementById("submit");
const days_name = document.querySelectorAll(".days_name");
const popUp = document.querySelector(".pop_up");
const day = document.querySelector(".milieu_calendar");
let cancel = document.getElementById("cancel");
// const name = document.getElementById(name)


let weekend = document.getElementById("d6");

day.addEventListener("click", () => {
  popUp.style.display = "block";
  
});
cancel.addEventListener('click', function(){
  popUp.style.display = "none"

})

// weekend.addEventListener("click" , function(){
//   popUp.style.display = "none"
// })

form.addEventListener("submit" , (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let afficher = document.createElement('div');
  afficher.innerHTML = `<span class= "affichage">${name}</span>`;
  
  
})

// formulaire.addEventListener('submit' ,function(e){
//   e.preventDefault();
//   
//   
//   
//   console.log(afficher)
// })
