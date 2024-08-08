let allData = [];

// Function to fetch all data from the API
async function fetchAllData() {
  try {
    const response = await fetch("http://localhost:2100/api/stories");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    allData = await response.json();
    console.log("Fetched all data:", allData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to get query parameters from URL
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

// Function to display story by ID
function displayStory(id) {
  const item = allData.find((data) => data._id === id); // Search directly in the array
  if (item) {
    console.log(`Item found:`, item);
    const container = document.getElementById("storyContainer");
    const imgUrl = `http://localhost:2100/files/${item.img}`;
    container.innerHTML = `
      <div class="row hero-section p-5">
        <div class="col-md-6">
          <div class="author-text">
            <h5>${item.name}</h5>
            <p>${item.title}</p>
            <span>${item.quote}</span>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center align-items-center flex-column  author-image">
          <img src="${imgUrl}" class="img-fluid mt-5">
          <h2>Born on ${formatDate(item.dob)}</h2>
        </div>
      </div>
      <h1 class="text-center mt-5 mb-5">Story</h1>
      <div class="container">
        <h4>${item.story}</h4>
      </div>
    `;
  } else {
    console.log(`Item not found for ID: ${id}`);
    document.getElementById("storyContainer").innerHTML =
      "<p>Story not found.</p>";
  }
}

// Initialize and display story when the document is loaded
document.addEventListener("DOMContentLoaded", async () => {
  await fetchAllData(); // Fetch data before trying to display a story
  const id = getQueryParam("id");
  console.log(`Fetched id: ${id}`);
  if (id) {
    displayStory(id);
  } else {
    document.getElementById("storyContainer").innerHTML =
      "<p>Story not found.</p>";
  }
});
