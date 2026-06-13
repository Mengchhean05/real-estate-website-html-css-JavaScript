// Optimized DOM selection and event handling
const menu = document.querySelector(".header .menu");
const menuBtn = document.querySelector("#menu-btn");

if (menuBtn) {
  menuBtn.onclick = () => menu.classList.toggle("active");
}

window.onscroll = () => menu?.classList.remove("active");

// Optimized image gallery interaction
document
  .querySelectorAll(".view-property .details .thumb .small-images img")
  .forEach((img) => {
    img.addEventListener("click", (e) => {
      const bigImg = document.querySelector(
        ".view-property .details .thumb .big-image img",
      );
      if (bigImg) bigImg.src = e.target.getAttribute("src");
    });
  });

document.querySelector("#menu-btn").onclick = () => {
  menu.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("active");
};

document.querySelectorAll('input[type="number"]').forEach((inputNumber) => {
  inputNumber.oninput = () => {
    if (inputNumber.value.length > inputNumber.maxLength)
      inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
  };
});

document
  .querySelectorAll(".view-property .details .thumb .small-images img")
  .forEach((images) => {
    images.onclick = () => {
      src = images.getAttribute("src");
      document.querySelector(
        ".view-property .details .thumb .big-image img",
      ).src = src;
    };
  });

document.querySelectorAll(".faq .box-container .box h3").forEach((headings) => {
  headings.onclick = () => {
    headings.parentElement.classList.toggle("active");
  };
});
