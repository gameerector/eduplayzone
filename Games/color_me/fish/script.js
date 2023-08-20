let fish = document.getElementsByClassName("fish");
var cursor = document.querySelector(".cursor");
let currentColor = "#ffffff";
let colorPalette = document.getElementsByClassName("color");
let colorPicker = document.getElementById("colorPicker");
let colorPickerInput = document.getElementById("colorPickerInput");

fishSections = Array.from(fish);
colors = Array.from(colorPalette);

fishSections.forEach((section) =>
  // console.log(section.getAttribute("data-identifier"))
  section.addEventListener("click", () => {
    let identifier = section.getAttribute("data-identifier");
    section.style.fill = currentColor;
    console.log(identifier);
  })
);

colors.forEach((color) => {
  color.addEventListener("click", () => {
    currentColor = color.getAttribute("data-color");
    cursor.style.background = currentColor;
    cursor.style.opacity = 1;
  });
});

colorPicker.addEventListener("click", () => {
  colorPickerInput.click();
});

colorPickerInput.addEventListener("change", (e) => {
  let pickedColor = e.target.value;
  colorPicker.style.background = pickedColor;
  currentColor = pickedColor;
  cursor.style.background = pickedColor;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
});
