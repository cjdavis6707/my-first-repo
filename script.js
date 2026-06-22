const foods = [
  {
    name: "Christian",
    image: "images/Christian.jpeg",
    message: "Classic choice. No one is shocked.",
  },
  {
    name: "MaKenzie",
    image: "images/MaKenzie.jpeg",
    message: "The website has excellent taste today.",
  },
  {
    name: "John 🍔",
    image: "images/John.jpeg",
    message: "A strong and respectable decision.",
  },
  {
    name: "Ellie",
    image: "images/Ellie.jpg",
    message: "Fancy, but not too fancy.",
  },
  {
    name: "Ezra",
    image: "images/Ezra.jpg",
    message: "Carbs have entered the chat.",
  },
  {
    name: "Jim",
    image: "images/Jim.jpeg",
    message: "Messy, but worth it.",
  },
  {
    name: "Dayana",
    image: "images/Dayana.jpg",
    message: "A strong and respectable decision.",
  },
  {
    name: "Bo",
    image: "images/Bo.jpeg",
    message: "Fancy, but not too fancy.",
  },
  {
    name: "Russ",
    image: "images/Russ.jpg",
    message: "Carbs have entered the chat.",
  },
  {
    name: "Tara",
    image: "images/Tara.jpeg",
    message: "Messy, but worth it.",
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
 
 