import {cursorController} from './cursor.js';
import {currentColor, pickDefaultColors, pickCustomColors} from './colorPicker.js'
const cursor = document.querySelector(".cursor");
const section = document.getElementsByClassName("section");



cursorController(cursor)
pickDefaultColors(cursor);
pickCustomColors(colorPicker, colorPickerInput, cursor)


let sections = Array.from(section);

sections.forEach((section) =>
  section.addEventListener("click", () => {
    section.style.fill = currentColor;
  })
);

