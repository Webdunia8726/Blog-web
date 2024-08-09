function checkAuth() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const expiryTime = localStorage.getItem("expiryTime");
  const currentTime = new Date().getTime();

  if (isAuthenticated === "true" && expiryTime && currentTime < expiryTime) {
    return true;
  } else {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("expiryTime");
    return false;
  }
}

if (!checkAuth()) {
  window.location.href = "login.html";
}

document
  .getElementById("dropdown-select")
  .addEventListener("change", function () {
    var selectedValue = this.value;
    var storyForm = document.getElementById("story-form");
    var podcastForm = document.getElementById("podcast-form");

    if (selectedValue === "story") {
      storyForm.style.display = "block";
      podcastForm.style.display = "none";
    } else if (selectedValue === "podcast") {
      storyForm.style.display = "none";
      podcastForm.style.display = "block";
    } else {
      storyForm.style.display = "none";
      podcastForm.style.display = "none";
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  const storyForm = document.querySelector("#story-form");
  const podcastForm = document.querySelector("#podcast-form");

  // Handle form submission for story
  if (storyForm) {
    storyForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(storyForm);

      try {
        const response = await fetch("http://localhost:2100/api/stories", {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        console.log("Story submitted:", result);
        if (response.ok) {
          alert("Story submitted successfully!");
          fetchStories(); // Refresh the stories list
        } else {
          alert("Failed to submit story.");
        }
      } catch (error) {
        console.error("Error submitting story:", error);
        alert("Error submitting story.");
      }
    });
  }

  // Handle form submission for podcast
  if (podcastForm) {
    podcastForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(podcastForm);

      try {
        const response = await fetch("http://localhost:2100/api/podcasts", {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        console.log("Podcast submitted:", result);
        if (response.ok) {
          alert("Podcast submitted successfully!");
          fetchPodcasts(); // Refresh the podcasts list
        } else {
          alert("Failed to submit podcast.");
        }
      } catch (error) {
        console.error("Error submitting podcast:", error);
        alert("Error submitting podcast.");
      }
    });
  }

  // Image preview functionality
  document.getElementById("img").addEventListener("change", function (event) {
    const file = event.target.files[0];
    const previewImg = document.getElementById("preview-img");
    const imagePreview = document.getElementById("image-preview");

    if (file) {
      if (file.size > 50 * 1024) {
        // Check if file size is more than 100 KB
        alert("Image size should be less than 100 KB.");
        document.getElementById("img").value = ""; // Clear the input
        previewImg.src = "";
        imagePreview.style.display = "none";
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        previewImg.src = e.target.result;
        imagePreview.style.display = "block"; // Show the image preview
      };
      reader.readAsDataURL(file);
    }
  });

  document
    .getElementById("image-podcast")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("preview-img-podcast").src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });

  async function fetchStories() {
    try {
      const response = await fetch("http://localhost:2100/api/stories");
      const stories = await response.json();
      const storiesContainer = document.querySelector(".stories-container");

      storiesContainer.innerHTML = ""; // Clear existing content

      stories.forEach((story) => {
        const storyRow = document.createElement("tr");
        storyRow.innerHTML = `
          <td>${story.name}</td>
          <td>${story.title}</td>
          <td>
            <button class="del-btn" onclick="deleteStory('${story._id}')">Delete</button>
          </td>
        `;
        storiesContainer.appendChild(storyRow);
      });
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  }

  // Example function to fetch podcasts
  async function fetchPodcasts() {
    try {
      const response = await fetch("http://localhost:2100/api/podcasts");
      const podcasts = await response.json();
      const podcastsContainer = document.querySelector(".podcasts-container");

      podcastsContainer.innerHTML = ""; // Clear existing content

      podcasts.forEach((podcast) => {
        const podcastRow = document.createElement("tr");
        podcastRow.innerHTML = `
          <td>${podcast.name}</td>
          <td>${podcast.title}</td>
          <td>
            <button onclick="deletePodcast('${podcast._id}')">Delete</button>
          </td>
        `;
        podcastsContainer.appendChild(podcastRow);
      });
    } catch (error) {
      console.error("Error fetching podcasts:", error);
    }
  }

  async function fetchPodcasts() {
    try {
      const response = await fetch("http://localhost:2100/api/podcasts");
      const podcasts = await response.json();
      const podcastsContainer = document.querySelector(".podcasts-container");

      podcastsContainer.innerHTML = ""; // Clear existing content

      podcasts.forEach((podcast) => {
        const podcastRow = document.createElement("tr");
        podcastRow.innerHTML = `
          <td>${podcast.name}</td>
          <td>${podcast.title}</td>
          <td>
            <button class='del-btn' onclick="deletePodcast('${podcast._id}')">Delete</button>
          </td>
        `;
        podcastsContainer.appendChild(podcastRow);
      });
    } catch (error) {
      console.error("Error fetching podcasts:", error);
    }
  }
  fetchStories();
  fetchPodcasts();
});

function deleteStory(id) {
  if (confirm(`Are you sure you want to delete story with ID: ${id}?`)) {
    fetch(`http://localhost:2100/api/stories/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Story deleted:", result);
        if (result.success) {
          alert("Story deleted successfully!");
          document.location.reload(); // Reload the page or refresh the list
        } else {
          alert("Failed to delete story.");
        }
      })
      .catch((error) => {
        console.error("Error deleting story:", error);
        alert("Error deleting story.");
      });
  }
}

async function deletePodcast(id) {
  if (confirm(`Are you sure you want to delete podcast with ID: ${id}?`)) {
    fetch(`http://localhost:2100/api/podcasts/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Story deleted:", result);
        if (result.success) {
          alert("Story deleted successfully!");
          document.location.reload(); // Reload the page or refresh the list
        } else {
          alert("Failed to delete story.");
        }
      })
      .catch((error) => {
        console.error("Error deleting story:", error);
        alert("Error deleting story.");
      });
  }
}
