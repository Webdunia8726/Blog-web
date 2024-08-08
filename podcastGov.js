let allPodcastData = [];

// Function to fetch all stories
async function fetchAllStories() {
  try {
    const response = await fetch("http://localhost:2100/api/podcasts");
    console.log("podcast data", response.data);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    allPodcastData = await response.json();
    initializeCarousels();
  } catch (error) {
    console.error("Error fetching all stories:", error);
  }
}

// Function to determine items per slide based on screen size
function getItemsPerSlide() {
  if (window.innerWidth < 576) return 1; // Mobile devices
  if (window.innerWidth < 768) return 2; // Tablets
  if (window.innerWidth < 992) return 3; // Small desktops
  return 4; // Default for larger screens
}

// Function to create carousel items
function createCarouselItems(data, containerId) {
  const container = document.getElementById(containerId);
  const itemsPerSlide = getItemsPerSlide(); // Adjust items per slide based on screen size
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
      col.className = `col-md-${12 / itemsPerSlide}`;
      const imgUrl = `http://localhost:2100/files/${item.img}`;
      col.innerHTML = `
        <div class="card testimonial-card">
          <a href="${
            item.url || "#"
          }" target="_blank" rel="noopener noreferrer">
            <img src="${imgUrl}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
              <h5>${item.name}</h5>
              <p>${item.title}</p>
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

// Function to initialize carousels for different categories
function initializeCarousels() {
  createCarouselItems(
    allPodcastData.filter(
      (story) => story.category === "P-Gov-administrative-innovation"
    ),
    "G-administrative-innovation"
  );
  createCarouselItems(
    allPodcastData.filter((story) => story.category === "P-Law-and-order"),
    "G-low-and-order"
  );
  createCarouselItems(
    allPodcastData.filter(
      (story) => story.category === "P-Scientific-Research"
    ),
    "G-scientific-research"
  );
}

// Call fetchAllStories to start the process
fetchAllStories();

// Add event listener to adjust carousel items on window resize
window.addEventListener("resize", () => {
  initializeCarousels();
});

// Smooth scroll for dropdown items
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
