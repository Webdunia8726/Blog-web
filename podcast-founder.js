const foundersData = [
  {
    id: "1",
    name: "Bhavish Aggarwal",
    img: "founder-img/1.jpg",
    title: "Co-Founder and CEO of Ola Cabs",
  },
  {
    id: "2",
    name: "Byju Raveendran",
    img: "founder-img/2.jpg",
    title: "Founder and CEO of BYJU'S",
  },
  {
    id: "3",
    name: "Falguni Nayar",
    img: "founder-img/3.jpg",
    title: "Founder of Nykaa",
  },
  {
    id: "4",
    name: "Kiran Mazumdar-Shaw",
    img: "founder-img/4.jpg",
    title: "Founder of Biocon",
  },
  {
    id: "5",
    name: "N. R. Narayana Murthy",
    img: "founder-img/5.jpg",
    title: "Co-founder of Infosys",
  },
  {
    id: "6",
    name: "Ritesh Agarwal",
    img: "founder-img/6.jpg",
    title: "Founder and CEO of OYO Rooms",
  },
];

const healthcareFoundersData = [
  {
    id: "1",
    name: "Kiran Mazumdar-Shaw",
    img: "Healthcare/Kiran Mazumdar-Shaw - Biocon.jpg",
    title: "biotech",
    URL: "https://youtu.be/58i057QXl1A?si=hru86lnZojQRK8rK",
  },
  {
    id: "2",
    name: "Mukesh Bansal",
    img: "Healthcare/Mukesh Bansal - CureFit.jpg",
    title: "CureFit",
    URL: "https://youtu.be/xdaUYsxVp9k?si=atUU0I4WKcBOx4E8",
  },
  {
    id: "3",
    name: "Prashant Tandon",
    img: "Healthcare/Prashant Tandon - 1mg.jpeg",
    title: "1mg",
    path: "https://youtu.be/zFFssJFem2Q?si=2b3ckWv1gWFl73yS",
  },
];

const agricultureFoundersData = [
  {
    id: "1",
    name: "Rajesh Ranjan ",
    img: "agriculture-img/Rajesh Ranjan - Krishify.jpg",
    title: "Session on Growth of Venture",
    URL: "https://youtu.be/A_o2VxAl4xI?si=n9dI4ePQnfqGhNM6",
  },
  {
    id: "2",
    name: "Shameek Chakravarty",
    img: "agriculture-img/Shameek Chakravarty - Farmizen.jpeg",
    title: "Farmizen",
    URL: "https://youtu.be/UocH9u1KMdc?si=jWHXHxrun2fqoQxu",
  },
  {
    id: "3",
    name: "Ananda Verma",
    img: "agriculture-img/Ananda Verma - Fasal.jpg",
    title: "Fasal",
    URL: "https://youtu.be/noOtyvy8gDM?si=P4ftUnwvxn_EYYKd",
  },
];

const educationFoundersData = [
  {
    id: "1",
    name: "Byju Raveendran",
    img: "Education-img/Byju Raveendran - BYJU'S (2).jpg",
    title: "START UP FOCUS",
    URL: "https://youtu.be/ZPyEfdO7v70?si=WXpbJFJAOpzxvK1X",
  },
  {
    id: "2",
    name: "Vamsi Krishna",
    img: "Education-img/Vamsi Krishna - Vedantu (1).jpeg",
    title: "Vedantu",
    URL: "https://youtu.be/e0yYrm7_F-8?si=C7SIrvwd5D0_X_Y_",
  },
  {
    id: "3",
    name: "Zishaan Hayath",
    img: "Education-img/Zishaan Hayath - Toppr (1).jpg",
    title: "Toppr",
    URL: "https://youtu.be/GpoTqu5o2xM?si=Dl8RxHTx8t26C1nf",
  },
];

const financeFoundersData = [
  {
    id: "1",
    name: "Harshil Mathur",
    img: "Finance-img/Harshil Mathur - Razorpay.jpg",
    title: "Razorpay",
    URL: " https://youtu.be/vP1yuvy_hhQ?si=coiVWxRac--940HD",
  },
  {
    id: "2",
    name: "Nithin Kamath",
    img: "Finance-img/Nithin Kamath - Zerodha.jpg",
    title: "Zerodha",
    URL: "https://youtu.be/7i81Ki-NYeA?si=L6P_P3gsQVMcWH_h",
  },
  {
    id: "3",
    name: "Yashish Dahiya",
    img: "Finance-img/Yashish Dahiya - PolicyBazaar.jpg",
    title: "PolicyBazaar",
  },
];

const socialImpactFoundersData = [
  {
    id: "1",
    name: "Nelson Mandela",
    img: "social/1.jpeg",
    title: "Anti-Apartheid Revolutionary and Former President of South Africa",
  },
  {
    id: "2",
    name: "Mother Teresa",
    img: "social/2.jpeg",
    title: "Founder of the Missionaries of Charity",
  },
  {
    id: "3",
    name: "Malala Yousafzai",
    img: "social/3.jpeg",
    title: "Education Activist and Nobel Laureate",
  },
  {
    id: "4",
    name: "Muhammad Yunus",
    img: "social/4.jpeg",
    title: "Founder of Grameen Bank and Nobel Peace Prize Laureate",
  },
  {
    id: "5",
    name: "Raj Panjabi",
    img: "social/5.jpeg",
    title: "Founder of Last Mile Health",
  },
  {
    id: "6",
    name: "Oprah Winfrey",
    img: "social/6.jpeg",
    title: "Media Executive and Philanthropist",
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
       <a href="${item.URL || "#"}" target="_blank" rel="noopener noreferrer">
          <img src="${item.img}" class="img-fluid" alt="${
        item.name
      }" class="card-img-top" >
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

// Call the function for each section
createCarouselItems(foundersData, "carouselInner");
createCarouselItems(healthcareFoundersData, "healthcareCarouselInner");
createCarouselItems(agricultureFoundersData, "agricultureCarouselInner");
createCarouselItems(educationFoundersData, "educationCarouselInner");
createCarouselItems(financeFoundersData, "financeCarouselInner");
createCarouselItems(socialImpactFoundersData, "impactCarouselInner");

// Create dynamic carousel for the Featured Founders section
