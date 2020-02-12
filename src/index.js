import "./styles/main.scss";

import mainTemplate from "./templates/main.hbs";

fetch("/data/cv-data.json").then(data => {
  const rootElement = document.querySelector("body>.container");
  data.json().then(cvData => {
    addPersonalInfo(rootElement, cvData);
  });
});

function addPersonalInfo(containerElement, personalInformation) {
  containerElement.innerHTML = mainTemplate({
    headerData: personalInformation.personal,
    sidebarData: {
      education: personalInformation.education,
      skills: personalInformation.skills
    },
    mainContentData: {
      profile: personalInformation.profile,
      experience: personalInformation.experience
    }
  });
}
