const foods = [
  {
    name: "Christian",
    image: "Images/Christian.jpeg",
    message: "Obviously the best choice.",
  },
  {
    name: "MaKenzie",
    image: "Images/MaKenzie.jpeg",
    message: "Readng the menu is optional when you already know the answer.",
  },
  {
    name: "John 🍔",
    image: "Images/John.jpeg",
    message: "The app must be feeling generous.",
  },
  {
    name: "Ellie",
    image: "Images/Ellie.jpg",
    message: "Indoor voice not found.",
  },
  {
    name: "Ezra",
    image: "Images/Ezra.jpg",
    message: "Aura farming in progress.",
  },
  {
    name: "Jim",
    image: "Images/Jim.jpeg",
    message: "Already has three ideas to improve this app.",
  },
  {
    name: "Dayana",
    image: "Images/Dayana.jpeg",
    message: "Married John still recovering.",
  },
  {
    name: "Bo",
    image: "Images/Bo.jpeg",
    message: "Her calender is stressed.",
  },
  {
    name: "Russ",
    image: "Images/Russ.jpg",
    message: "Push-ups first questions later.",
  },
  {
    name: "Tara",
    image: "Images/Tara.jpeg",
    message: "Hide your plastic.",
  },
];
 
const pickButton = document.getElementById("pickButton");
const foodResult = document.getElementById("foodResult");
const foodMessage = document.getElementById("foodMessage");
const foodImage = document.getElementById("foodImage");
const questionMark = document.getElementById("questionMark");
 
pickButton.addEventListener("click", function () {
  pickButton.disabled = true;
  pickButton.textContent = "Choosing...";
 
  foodImage.style.display = "none";
  questionMark.style.display = "flex";
 
  foodResult.textContent = "Thinking...";
  foodMessage.textContent = "Consulting the food gods...";
 
  const spinning = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * foods.length);
    const food = foods[randomIndex];
 
    foodResult.textContent = food.name;
  }, 100);
 
  setTimeout(() => {
    clearInterval(spinning);
 
    const finalIndex = Math.floor(Math.random() * foods.length);
    const finalFood = foods[finalIndex];
 
    questionMark.style.display = "none";
    foodImage.style.display = "block";
 
    foodResult.textContent = finalFood.name;
    foodMessage.textContent = finalFood.message;
    foodImage.src = finalFood.image;
    foodImage.alt = finalFood.name;
 
    pickButton.disabled = false;
    pickButton.textContent = "Pick for me";
  }, 3000);
});
 