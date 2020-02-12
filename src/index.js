import './styles/main.scss';
import headerTemplate from './templates/header.hbs';
import mainTemplate from './templates/main.hbs'; 


fetch('/data/cv-data.json').then(data => {
    const rootElement = document.querySelector('body>.container');
    data.json().then(cvData => {
        addPersonalInfo(rootElement, cvData.personal);
    });
});

function addHeaderView() {
    return headerTemplate();
}

function addPersonalInfo(cotainerElement, personalInformation) {
    const headerElement = cotainerElement.querySelector('header');
    const mainElemnt = cotainerElement.querySelector('main');
    headerElement.innerHTML = addHeaderView();
    mainElemnt.innerHTML = mainTemplate();
}