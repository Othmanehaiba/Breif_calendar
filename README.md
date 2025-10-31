# 🗓️ OH_Calendar

## 📋 Description
**OH_Calendar** is a simple interactive calendar built with **HTML**, **CSS**, and **JavaScript**.  
It allows users to click on a specific day, open a popup form, and add a reservation containing their name, time, number of people, and reservation type.

All reservations are displayed directly inside the selected day cell of the calendar.

---

## 🚀 Features
- 📅 Click on any day to open a reservation popup  
- 🧾 Fill in details like:
  - Full name  
  - Start time and end time  
  - Number of people  
  - Type of reservation (VIP, Anniversaire, Standard, En Groupe)  
-  Instantly display the reservation on the selected day  
-  Cancel or close the form anytime  

---

## 🧠 Technologies Used
- **HTML5** – Page structure  
- **CSS3** – Styling and layout  
- **Bootstrap 5** – Form design and responsive components  
- **JavaScript (Vanilla)** – DOM manipulation and event handling  

---

## 📂 Project Structure
OH_Calendar/
│
├── index.html # Main HTML file
├── style.css # CSS styling
├── main.js # JavaScript logic
└── README.md # Project documentation

---

## ⚙️ How It Works
1. Open the project in a browser.
2. Click on any day cell to open the popup form.
3. Fill in the form and click **"Envoyer"**.
4. Your name appears inside the clicked day cell.
5. Click **"Annuler"** to close the form without saving.

---

## 🧩 Code Overview
### main.js
```js
const days = document.querySelectorAll(".days");
const popUp = document.querySelector(".pop_up");
let curr_day = null;

// Open popup when clicking on a day
days.forEach((day) => {
  day.addEventListener("click", () => {
    popUp.style.display = "block";
    curr_day = day;
  });
});

// Close popup
document.getElementById("cancel").addEventListener("click", () => {
  popUp.style.display = "none";
});

// Submit form and display name in selected day
document.querySelector(".formulaire").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  if (!curr_day) return;

  const afficher = document.createElement("div");
  afficher.classList.add("affichage");
  afficher.textContent = name;

  curr_day.appendChild(afficher);
  e.target.reset();
  popUp.style.display = "none";
});
