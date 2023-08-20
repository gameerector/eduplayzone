export const paintSections = (selector, currentColor) => {
  let sections = Array.from(selector);
  sections.forEach((section) =>
    section.addEventListener("click", () => {
      console.log(currentColor)
      const identifier = section.getAttribute("data-identifier");
      section.style.fill = currentColor;
    })
  );
}