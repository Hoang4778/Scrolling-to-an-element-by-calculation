const remUnit = parseFloat(getComputedStyle(document.documentElement).fontSize);
let headerHeight = 0;
const header = document.querySelector(".header");
if (header) {
  headerHeight = header.offsetHeight;
}
document.documentElement.style.setProperty(
  "--scroll-padding-top",
  `${headerHeight / remUnit}rem`
);

const btnScrollDown = document.querySelector(".btn-scroll-down");
if (btnScrollDown) {
  document.documentElement.style.setProperty(
    "--btn-top-position",
    `${headerHeight / remUnit + 1}rem`
  );
  window.addEventListener("scroll", () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (scrolled <= scrollable / 2) {
      btnScrollDown.classList.remove("btn-move-down");
    } else {
      document.documentElement.style.setProperty(
        "--btn-bottom-position",
        `${
          (window.innerHeight - headerHeight - btnScrollDown.offsetHeight) /
            remUnit -
          2
        }rem`
      );
      btnScrollDown.classList.add("btn-move-down");
    }
  });

  btnScrollDown.addEventListener("click", () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (scrolled <= scrollable / 2) {
      const box2 = document.querySelector(".box2");
      if (box2) {
        const box2RectTop = box2.getBoundingClientRect().top;
        const distanceToBox2 = window.scrollY + box2RectTop - headerHeight;
        window.scrollTo(0, distanceToBox2);
        btnScrollDown.classList.add("btn-move-down");
      }
    } else {
      const box1 = document.querySelector(".box1");
      if (box1) {
        const box1RectTop = box1.getBoundingClientRect().top;
        const distanceToBox1 = window.scrollY + box1RectTop - headerHeight;
        window.scrollTo(0, distanceToBox1);
        btnScrollDown.classList.remove("btn-move-down");
      }
    }
  });
}
