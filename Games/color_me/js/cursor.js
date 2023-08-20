export function cursorController(cursor) {
  document.addEventListener("mousemove", function (event) {
    var x = event.clientX;
    var y = event.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
  });
  
  document.addEventListener("mousedown", function () {
    cursor.classList.add("click");
  });
  
  document.addEventListener("mouseup", function () {
    cursor.classList.remove("click");
  });

}
