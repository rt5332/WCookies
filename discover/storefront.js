const jobs = [
  {
    title: "Head Baker",
    image: "https://cdn-icons-png.flaticon.com/512/1182/1182139.png",
    details:
      "Responsible for leading the baking team, consisting of 5-6 bakers per location.",
    openPositions: "2",
    link: "/discover/storefront/headbaker.html",
    link2: "/discover/applynow.html",
  },
  
  {
    title: "Store Manager",
    image: "https://cdn-icons-png.flaticon.com/512/1/1099.png",
    details:
      "Responsible for overseeing in-store operations and leading the in-store team.",
    openPositions: "1",
    link: "/discover/storefront/storemanager.html",
    link2: "/discover/applynow.html",
  },
  
  {
    title: "Delivery",
    image: "https://static.thenounproject.com/png/153492-200.png",
    details:
      "Responsible for the handling and delivery of our cookies.",
    openPositions: "5",
    link: "/discover/storefront/delivery.html",
    link2: "/discover/applynow.html",
  },
  
  {
    title: "Baker",
    image: "https://cdn-icons-png.flaticon.com/512/1182/1182139.png",
    details:
      "Responsible for crafting our homestyle cookie dough and decorating of the cookies.",
    openPositions: "4",
    link: "/discover/storefront/baker.html",
    link2: "/discover/applynow.html",
  },


  {
    title: "Cashier",
    image: "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/cash_register.png",
    details:
      "Responsible for the sales of cookies and the freshness of stock.",
    openPositions: "3",
    link: "/discover/storefront/cashier.html",
    link2: "/discover/applynow.html",
  },
];

const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

if (jobs.length == 1) {
  jobsHeading.innerHTML = `${jobs.length} Job`;
} else {
  jobsHeading.innerHTML = `${jobs.length} Jobs`;
}

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      let detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "More Details";
      detailsBtn.classList.add("details-btn");


      let applynowBtn = document.createElement("a");
      applynowBtn.href = job.link2;
      applynowBtn.innerHTML = "Apply Now!";
      applynowBtn.classList.add("applynow-btn");

      let openPositions = document.createElement("span");
      openPositions.classList.add("open-positions");

      if (job.openPositions == 1) {
        openPositions.innerHTML = `${job.openPositions} open position`;
      } else {
        openPositions.innerHTML = `${job.openPositions} open positions`;
      }

      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);
      jobCard.appendChild(openPositions);
      jobCard.appendChild(applynowBtn);

      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  createJobListingCards();
});