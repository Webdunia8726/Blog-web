// Assume you have a global variable to hold all the data
let allStoriesData = [];

// Function to fetch all stories
async function fetchAllStories() {
  try {
    const response = await fetch("http://localhost:2100/api/stories");
    console.log("response is here", response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    allStoriesData = await response.json();
    initializeCarousels();
    console.log("response is here", response);
  } catch (error) {
    console.error("Error fetching all stories:", error);
  }
}

function getItemsPerSlide() {
  if (window.innerWidth < 576) return 1; // Mobile devices
  if (window.innerWidth < 768) return 2; // Tablets
  if (window.innerWidth < 992) return 3; // Small desktops
  return 4; // Default for larger screens
}

// Function to filter stories by category and create carousel items
function createCarouselItems(data, containerId) {
  const container = document.getElementById(containerId);
  const itemsPerSlide = getItemsPerSlide(); // Number of items per slide
  const numberOfSlides = Math.ceil(data.length / itemsPerSlide); // Calculate number of slides needed

  // Clear any existing content in the container
  container.innerHTML = "";

  for (let i = 0; i < numberOfSlides; i++) {
    const isActive = i === 0 ? "active" : ""; // Set the first slide as active

    const carouselItem = document.createElement("div");
    carouselItem.className = `carousel-item ${isActive}`; // Add the active class for the first slide

    const row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < itemsPerSlide; j++) {
      const index = i * itemsPerSlide + j;
      if (index >= data.length) break; // Exit if no more data

      const item = data[index];

      const col = document.createElement("div");
      col.className = `col-md-${12 / itemsPerSlide}`;
      const imgUrl = `http://localhost:2100/files/${item.img}`;
      col.innerHTML = `
        <div class="card mb-5">
          <a href="show_stories.html?id=${item._id}" class="card-link">
             <img src="${imgUrl}" alt="${item.name}" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title" >${item.name}</h5>
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

// Function to initialize carousels for different categories
function initializeCarousels() {
  // Filter data by category and create carousels
  createCarouselItems(
    allStoriesData.filter((story) => story.category === "founder-technology"),
    "carouselInner"
  );
  createCarouselItems(
    allStoriesData.filter((story) => story.category === "founder-education"),
    "healthcareCarouselInner"
  );
  createCarouselItems(
    allStoriesData.filter((story) => story.category === "founder-agriculture"),
    "agricultureCarouselInner"
  );
  createCarouselItems(
    allStoriesData.filter((story) => story.category === "founder-healthcare"),
    "educationCarouselInner"
  );
  createCarouselItems(
    allStoriesData.filter((story) => story.category === "founder-finance"),
    "financeCarouselInner"
  );
  createCarouselItems(
    allStoriesData.filter(
      (story) => story.category === "founder-social-impact"
    ),
    "impactCarouselInner"
  );
}

// Call fetchAllStories to start the process
fetchAllStories();

// Smooth scroll for dropdown items
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    const targetId = this.getAttribute("data-target");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
