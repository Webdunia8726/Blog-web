const foundersData = [
  {
    id: "1",
    name: "Bhavish Aggarwal",
    img: "founder-img/1.jpg",
    title: "Co-Founder and CEO of Ola Cabs",
  },

  {
    id: "5",
    name: "N. R. Narayana Murthy",
    img: "founder-img/5.jpg",
    title: "Co-founder of Infosys",
  },
  {
    id: "6",
    name: "Vijay Shekhar Sharma",
    img: "founder-img/6.jpg",
    title: "the founder of Paytm",
  },
];

const healthcareFoundersData = [
  {
    id: "1",
    name: "Kiran Mazumdar-Shaw",
    img: "Healthcare/Kiran Mazumdar-Shaw - Biocon.jpg",
    title: "Kiran Mazumdar-Shaw",
  },
  {
    id: "2",
    name: "Mukesh Bansal",
    img: "Healthcare/Mukesh Bansal - CureFit.jpg",
    title: " co-founder and CEO of CureFit",
  },
  {
    id: "3",
    name: "Prashant Tandon",
    img: "Healthcare/Prashant Tandon - 1mg.jpeg",
    title: "co-founder and CEO of 1mg",
  },
];

const agricultureFoundersData = [
  {
    id: "1",
    name: "Rajesh Ranjan",
    img: "agriculture-img/Rajesh Ranjan - Krishify.jpg",
    title: "co-founder and CEO of Krishify",
  },
  {
    id: "2",
    name: "Shameek Chakravarty",
    img: "agriculture-img/Shameek Chakravarty - Farmizen.jpg",
    title: "co-founder and CEO of Farmizen",
  },
  {
    id: "3",
    name: "Shardul Sheth ",
    img: "agriculture-img/Shardul Sheth - AgroStar.jpg",
    title: "co-founder and CEO of AgroStar",
  },
];

const educationFoundersData = [
  {
    id: "1",
    name: "Byju Raveendran",
    img: "Education-img/Byju Raveendran - BYJU'S (2).jpg",
    title: "founder and CEO of BYJU'S",
  },
  {
    id: "2",
    name: "Vamsi Krishna",
    img: "Education-img/Vamsi Krishna - Vedantu (1).jpeg",
    title: "co-founder and CEO of Vedantu",
  },
  {
    id: "3",
    name: "Zishaan Hayath",
    img: "Education-img/Zishaan Hayath - Toppr (1).jpg",
    title: "co-founder and CEO of Toppr",
  },
];

const financeFoundersData = [
  {
    id: "1",
    name: "Harshil Mathur ",
    img: "Finance-img/Harshil Mathur - Razorpay.jpg",
    title: "co-founder and CEO of Razorpay",
  },
  {
    id: "2",
    name: "Nithin Kamath",
    img: "Finance-img/Nithin Kamath - Zerodha.jpg",
    title: " co-founded Zerodha ",
  },
  {
    id: "3",
    name: "Yashish Dahiya",
    img: "Finance-img/Yashish Dahiya - PolicyBazaar.jpg",
    title: "co-founder and CEO of PolicyBazaar",
  },
];

const socialImpactFoundersData = [
  {
    id: "1",
    name: "Anshu Gupta",
    img: "social/Anshu Gupta - Goonj.jpg",
    title: "founder of Goonj",
  },
  {
    id: "2",
    name: "Joe Madiath",
    img: "social/Joe Madiath - Gram Vikas.jpg",
    title: "founder and former executive director of Gram Vikas",
  },
  {
    id: "3",
    name: "Madhu Pandit Dasa ",
    img: "social/Madhu Pandit Dasa - Akshaya Patra Foundation.jpg",
    title: "founder and chairman of the Akshaya Patra Foundation",
  },
];

function createCarouselItems(data, containerId) {
  const container = document.getElementById(containerId);
  const itemsPerSlide = 3; // Number of items per slide
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
      col.className = "col-md-4";

      col.innerHTML = `
        <div class="card testimonial-card">
          <img src="${item.img}" alt="${item.name}" class="card-img-top">
          <div class="card-body">
            <h5>${item.name}</h5>
            <p>${item.title}</p>
          </div>
        </div>
      `;

      row.appendChild(col);
    }

    carouselItem.appendChild(row);
    container.appendChild(carouselItem);
  }
}

// Call the function for each section
createCarouselItems(foundersData, "carouselInner");
createCarouselItems(healthcareFoundersData, "healthcareCarouselInner");
createCarouselItems(agricultureFoundersData, "agricultureCarouselInner");
createCarouselItems(educationFoundersData, "educationCarouselInner");
createCarouselItems(financeFoundersData, "financeCarouselInner");
createCarouselItems(socialImpactFoundersData, "impactCarouselInner");
