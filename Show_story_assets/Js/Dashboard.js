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
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("preview-img").src = e.target.result;
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

  // Fetch and display stories
  async function fetchStories() {
    try {
      const response = await fetch("http://localhost:2100/api/stories");
      const stories = await response.json();
      const storiesContainer = document.querySelector(".stories-container");

      storiesContainer.innerHTML = ""; // Clear existing content

      stories.forEach((story) => {
        const storyElement = document.createElement("div");
        storyElement.innerHTML = `
        <div class="showData">
            <h6>${story.name}</h6>
          <p>${story.title}</p>
          
          <div class="del-btn">
              <button onclick="deleteStory('${story._id}')">Delete</button>
          </div>
        </div>
          
        `;
        storiesContainer.appendChild(storyElement);
      });
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  }

  // Fetch and display podcasts
  async function fetchPodcasts() {
    try {
      const response = await fetch("http://localhost:2100/api/podcasts");
      const podcasts = await response.json();
      const podcastsContainer = document.querySelector(".podcasts-container");

      podcastsContainer.innerHTML = ""; // Clear existing content

      podcasts.forEach((podcast) => {
        const podcastElement = document.createElement("div");
        podcastElement.innerHTML = `
         
        <div class="showData">
           <h6>${podcast.name}</h6>
          <p>${podcast.title}</p>   
          <button onclick="deletePodcast('${podcast._id}')">Delete</button>
        </div>
          
        `;
        podcastsContainer.appendChild(podcastElement);
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
