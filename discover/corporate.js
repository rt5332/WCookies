const jobs = [
  {
    title: "Administrative Assistant",
    image: "https://cdn0.iconfinder.com/data/icons/professionals-line/2048/1606_-_Secretary-512.png",
    details:
      "Responsible for managing and distributing information among their co-workers, answering phones, and doing other administrative work.",
    openPositions: "2",
    link: "/discover/corporate/adminassistant.html",
    link2: "/discover/applynow.html",
  },

  {
    title: "Customer Service Representative",
    image: "https://cdn0.iconfinder.com/data/icons/flat-global-logistic-icons/48/19-512.png",
    details:
      "Responsible for answering inbound phone calls and addressing customers’ questions about products and services.",
    openPositions: "3",
    link: "/discover/corporate/customerservicerep.html",
    link2: "/discover/applynow.html",
  },

  {
    title: "Human Resource Specialist",
    image: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/f6913c2a3c31a00c2bfcc15eb7728d5e",
    details:
      "Responsible for planning, executing and closing projects on time and within budget.",
    openPositions: "1",
    link: "/discover/corporate/hrspecialist.html",
    link2: "/discover/applynow.html",
  },

  {
    title: "Supply Chain Manager",
    image: "https://cdn-icons-png.flaticon.com/512/5141/5141763.png",
    details:
      "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
    openPositions: "1",
    link: "/discover/corporate/supplychainmanager.html",
    link2: "/discover/applynow.html",
  },

  {
    title: "Sales Representative",
    image: "https://tse4.mm.bing.net/th?id=OIP.jjR2fNI3VBW0JucVmJW1FgAAAA&pid=Api&P=0&h=220",
    details:
      "Responsible for reaching out to potential customers and closing sales deals.",
    openPositions: "4",
    link: "/discover/corporate/salesrep.html",
    link2: "/discover/applynow.html",
  },

  {
    title: "Marketing Manager",
    image: "https://cdn-icons-png.flaticon.com/512/951/951177.png",
    details:
      "Responsible for creating and executing marketing strategies to promote a company or product.",
    openPositions: "1",
    link: "/discover/corporate/marketingmanager.html",
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