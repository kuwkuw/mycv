import './style.scss';

console.log("This is my CV");

fetch('/data/cv-data.json').then(data => {
    const rootElement = document.querySelector('#root');
    data.json().then(cvData => {
        addPersonalInfo(rootElement, cvData.personal);
    });
});

function addPersonalInfo(cotainerElement, personalInformation) {
    const nameElement = document.createElement("div");
    nameElement.innerHTML = `${personalInformation.name} ${personalInformation.surname}`;
    cotainerElement.appendChild(nameElement);
}