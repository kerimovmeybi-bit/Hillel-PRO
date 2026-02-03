//Home-work14.1 
function createSlider(container) {
  const images = [...container.querySelectorAll("img")];
  let index = 0;

  
  container.innerHTML = "";
  container.classList.add("slider-root");

 
  const windowEl = document.createElement("div");
  windowEl.className = "slider-window";

  
  const track = document.createElement("div");
  track.className = "slider-track";

  images.forEach(img => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.append(img);
    track.append(slide);
  });

  windowEl.append(track);

 
  const prevBtn = document.createElement("button");
  prevBtn.className = "slider-btn prev";
  prevBtn.textContent = "‹";

  const nextBtn = document.createElement("button");
  nextBtn.className = "slider-btn next";
  nextBtn.textContent = "›";

  const dots = document.createElement("div");
  dots.className = "dots";

  images.forEach((_, i) => {
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
    nextBtn.disabled = index === images.length - 1;

    dotsItems.forEach(d => d.classList.remove("active"));
    dotsItems[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    if (index < images.length - 1) {
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
document.querySelectorAll(".slider").forEach(createSlider);
