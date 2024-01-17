document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordionRe");

  accordionItems.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});