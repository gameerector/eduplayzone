export let currentColor = '';
const colorPalette = document.getElementsByClassName("color");
const selector = document.getElementById("colorPicker");
const input = document.getElementById("colorPickerInput");

export const pickDefaultColors = (cursor) => {
  let colors = Array.from(colorPalette);
  colors.forEach((color) => {
  color.addEventListener("click", () => {
      currentColor = color.getAttribute("data-color");
      cursor.style.background = currentColor;
      cursor.style.opacity = 1;
    console.log(currentColor)
    });
  });
  
}


export const pickCustomColors = (cursor) => {
  selector.addEventListener("click", () => {
    input.click();
  });
  
  
  input.addEventListener("change", (e) => {
    const pickedColor = e.target.value;
    selector.style.background = pickedColor;
    currentColor = pickedColor;
    cursor.style.background = pickedColor;
  });
}

