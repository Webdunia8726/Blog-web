let allStoriesData = [];

async function fetchAllStories() {
  try {
    const response = await fetch("http://localhost:2100/api/stories");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    allStoriesData = await response.json();
    initializeCarousels();
  } catch (error) {
    console.error("Error fetching all stories:", error);
  }
}

function createCarouselItems(data, containerId) {
  const container = document.getElementById(containerId);
  const itemsPerSlide = 4;
  const numberOfSlides = Math.ceil(data.length / itemsPerSlide);

  container.innerHTML = "";

  for (let i = 0; i < numberOfSlides; i++) {
    const isActive = i === 0 ? "active" : "";
    const carouselItem = document.createElement("div");
    carouselItem.className = `carousel-item ${isActive}`;

    const row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < itemsPerSlide; j++) {
      const index = i * itemsPerSlide + j;
      if (index >= data.length) break;

      const item = data[index];
      const col = document.createElement("div");
      col.className = "col-md-3";
      const imgUrl = `http://localhost:2100/files/${item.img}`;
      col.innerHTML = `
        <div class="card">
          <a href="show_stories.html?id=${item._id}" class="card-link">
            <img src="${imgUrl}" alt="${item.name}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.title}</p>
            </div>
          </a>
        </div>
      `;
      row.appendChild(col);
    }

    carouselItem.appendChild(row);
    container.appendChild(carouselItem);
  }
}

function initializeCarousels() {
  createCarouselItems(
    allStoriesData.filter((story) => story.category === "Gov-law-order"),
    "LowCarousel"
  );
  createCarouselItems(
    allStoriesData.filter((story) => story.category === "Gov-feature"),
    "featured-officer"
  );
  createCarouselItems(
    allStoriesData.filter(
      (story) => story.category === "Gov-scientific-research"
    ),
    "ScientificCarousel"
  );
  createCarouselItems(
    allStoriesData.filter(
      (story) => story.category === "Gov-administrative-innovation"
    ),
    "Administrative"
  );

  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    const bsCarousel = new bootstrap.Carousel(carousel);
    bsCarousel.refresh();
  });
}

fetchAllStories();

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("data-target");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
