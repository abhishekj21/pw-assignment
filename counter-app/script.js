// Initialize the counter with value from localStorage, or default to 0
let count = localStorage.getItem("count")
  ? parseInt(localStorage.getItem("count"))
  : 0;

const decrementBtn = document.querySelector(".decrement-btn");
const outputBtn = document.querySelector(".result");
const incrementBtn = document.querySelector(".increment-btn");
const resetBtn = document.querySelector(".reset-button");
(".reset-button");

// Display the current count from localStorage
outputBtn.textContent = count;

incrementBtn.addEventListener("click", () => {
  count += 1;
  outputBtn.textContent = count;
  localStorage.setItem("count", count); // Store the updated count in localStorage
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
    outputBtn.textContent = count;
    localStorage.setItem("count", count); // Store the updated count in localStorage
  }
});
resetBtn.addEventListener("click", () => {
  count = 0;
  outputBtn.textContent = count;
  localStorage.setItem("count", count); // Reset count in localStorage
});
