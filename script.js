const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    removeAtiveClasses();
    panel.classList.add("active");
  });
});

const removeAtiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
