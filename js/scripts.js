//Home-work14.1 
const slides1 = [
  {
    img: "./images/image1.png",
    title: "Alexander Alexandrovsky",
    text: "Managing partner"
  },
  {
    img: "./images/image2.png",
    title: "Oksana Kobzar",
    text: "Equity partner, Attorney-at-law"
  },
  {
    img: "./images/image3.png",
    title: "Vladislav Melnik",
    text: "Associate"
  }
];

const slides2 = [
  {
    img: "./images/image4.png",
    title: "Evgeniy Patrikov",
    text: "Equity partner, Attorney-at-law"
  },
  {
    img: "./images/image5.png",
    title: "Julia Wolk",
    text: "Associate, Attorney-at-law"
  }
];
function createSlider(container, slides) {
  let index = 0;

  container.classList.add("slider-root");
  container.innerHTML = "";

  /* window */
  const windowEl = document.createElement("div");
  windowEl.className = "slider-window";

  /* track */
  const track = document.createElement("div");
  track.className = "slider-track";

  slides.forEach(slideData => {
    const slide = document.createElement("div");
    slide.className = "slide";

    slide.innerHTML = `
      <img src="${slideData.img}" alt="">
      ${slideData.title ? `<h3>${slideData.title}</h3>` : ""}
      ${slideData.text ? `<p>${slideData.text}</p>` : ""}
    `;

    track.append(slide);
  });

  windowEl.append(track);

  /* buttons */
  const prevBtn = document.createElement("button");
  prevBtn.className = "slider-btn prev";
  prevBtn.textContent = "‹";

  const nextBtn = document.createElement("button");
  nextBtn.className = "slider-btn next";
  nextBtn.textContent = "›";

  /* dots */
  const dots = document.createElement("div");
  dots.className = "dots";

  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "dot";
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      index = i;
      update();
    });

    dots.append(dot);
  });

  container.append(prevBtn, windowEl, nextBtn, dots);

  const dotsItems = dots.querySelectorAll(".dot");

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;

    dotsItems.forEach(d => d.classList.remove("active"));
    dotsItems[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    if (index < slides.length - 1) {
      index++;
      update();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      update();
    }
  });

  update();
}
createSlider(document.getElementById("slider1"), slides1);
createSlider(document.getElementById("slider2"), slides2);
