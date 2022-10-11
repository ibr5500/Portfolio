// mobile menu
const openButton = document.getElementById('menu-button');
const closeButton = document.querySelector('.close');
const closeItems = document.querySelector('.closeItem');

openButton.onclick = function openMenu() {
  document.querySelector('#mobile-menu').style = 'display: block';
  document.querySelector('#menu-button').style = 'display: none';
  document.querySelector('body').style = 'overflow: hidden';
  document.querySelector('main').style = 'filter: blur(6px); z-index: -1';
};

closeButton.onclick = function closeMenu() {
  document.querySelector('#mobile-menu').style = 'display: none';
  document.querySelector('#menu-button').style = 'display: block';
  document.querySelector('body').style = 'overflow: scroll';
  document.querySelector('main').style = 'filter: none; z-index: 0';
};

closeItems.onclick = function closeItem() {
  document.querySelector('#mobile-menu').style = 'display: none';
  document.querySelector('#menu-button').style = 'display: block';
  document.querySelector('body').style = 'overflow: scroll';
  document.querySelector('main').style = 'filter: none; z-index: 0';
};
// end

const projectsList = [
  {
    id: 1,
    image: './assets/fly-digital.png',
    title: 'We Fly Digital',
    description: 'We Fly Digital (full stack web): is a flight reservation app that allows the user to book a flight from and to anywhere. Built as a group.',
    spans: [
      'Microverse',
      'Full Stack Dev',
      '2022',
    ],
    skills: [
      'Ruby on Rails',
      'React',
      'Redux',
    ],
    liveLink: 'https://we-fly-digital.herokuapp.com/',
    sourceLink: 'https://github.com/ibr5500/flight_reservation-frontend',
  },
  {
    id: 2,
    image: './assets/egivy.png',
    title: 'EgIvy app',
    description: 'A web application where you can manage your budget, you have a list of transactions associated with a category, so that you can see how much money you spent and on what, built as a solo.',
    spans: [
      'Microverse',
      'Full Stack Dev',
      '2022',
    ],
    skills: [
      'Ruby on Rails',
      'bootstrap',
      'RSpec',
      'Devise',
      'heroku',
    ],
    liveLink: 'https://egivy.herokuapp.com/',
    sourceLink: 'https://github.com/ibr5500/Budget_App',
  },
  {
    id: 3,
    image: './assets/disney.png',
    title: 'Disney World',
    description: 'Disney World: is a Metric data app about Disney characters, using Disney API, displays their names, images, movies, and Tv Shows, built as a solo.',
    spans: [
      'Microverse',
      'Front End Dev',
      '2022',
    ],
    skills: [
      'React-Redux',
      'CSS',
      'Jest',
      'Disney-API',
      'Netlify',
    ],
    liveLink: 'https://disney-world.netlify.app/',
    sourceLink: 'https://github.com/ibr5500/Disney-world',
  },
  {
    id: 4,
    image: './assets/foodify-kitchenball.png',
    title: 'Foodify Kitchenball',
    description: 'This project was created as a capstone project, for the JavaScript module at Microverse. It was a group project, and we were two members Hammad Siddique and Ibrahim Ahmat. Moreover, this project took a week to be created from zero. We have used Meal-DB API for it',
    spans: [
      'Microverse',
      'Front End Dev',
      '2022',
    ],
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    liveLink: 'https://hammadsiddique.github.io/Foodify-Kitchenball/index.html',
    sourceLink: 'https://github.com/HammadSiddique/Foodify-Kitchenball',
  }];

const cards = () => {
  const card = projectsList.map((elem, index) => ` <div class="card flex">
            <div class="${index % 2 !== 0 ? 'card-items-reverse' : 'card-items'} flex">
                <img class='card-image' src="${elem.image}" alt="Project-${elem.id} screenshot" />
                <div class="card-continent flex">
                    <div class="card-header-container">
                        <h2 class="card-header">${elem.title}</h2>
                    </div>
                    <div class="card-elemnts">
                        <span class="span-weight-500">${elem.spans[0]}</span>
                        <img class="counter" src="./assets/counter.png" alt="counter" />
                        <span class="span-weight-400">${elem.spans[1]}</span>
                        <img class="counter" src="./assets/counter.png" alt="counter" />
                        <span class="span-weight-400">${elem.spans[2]}</span>
                    </div>
                    <p class="card-text">${elem.description}</p>
                    <ul class="skills-list flex list-style">
                    ${elem.skills.map((e) => `<li>${e}</li>`).join('')}
                    </ul>
                    <div class="button-container flex">
                        <button onclick="projectData(${elem.id})" type="button" class="check-project button flex">See Project</button>
                    </div>
                </div>
            </div>
        </div>`);
  return card;
};

window.addEventListener('load', () => {
  document.getElementById('cards-container').innerHTML = cards();
});

// popup window

const projectData = (projectId) => {
  if (projectId === null) return;
  let item = projectsList.filter((elem) => elem.id === projectId);
  item = item.shift();
  const popup = `<div class="window"> 
            <div id="popup-window" class="flex">
                <div class="window-header-container ">
                    <div class="window-header">
                        <h2>${item.title}</h2>
                    </div>
                    <a onclick='closeWindow()' id="closeWindow" href="#window"><i class="fa fa-close"></i></a>
                </div>
                <div class="window-elemnts">
                    <span class="span-weight-500">${item.spans[0]}</span>
                    <img class="counter" src="./assets/counter.png" alt="counter" />
                    <span class="span-weight-400">${item.spans[1]}</span>
                    <img class="counter" src="./assets/counter.png" alt="counter" />
                    <span class="span-weight-400">${item.spans[2]}</span>
                </div>
                <div class='window-image-container'>
                    <img class='window-image' src="${item.image}" alt="Project-4 screenshot" />
                </div>
                <div class="window-card-container flex">
                    <div class="window-items">
                        <p class="window-text">${item.description}</p>
                    </div>
                    <div class="window-card">
                        <ul class="window-skills flex list-style">${item.skills.map((s) => `<li>${s}</li>`).join('')}</ul>
                        <div class="window-button-container flex">
                            <a class="check-project window-button flex" href="${item.liveLink}" target="”_blank”" rel="noreferrer noopener">
                                See live<i class="fa fa-power-off size"></i>
                            </a>
                            <a class="check-project window-button flex" href="${item.sourceLink}" target="”_blank”" rel="noreferrer noopener">
                                See Source<i class="fa fa-github-alt size"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  document.querySelector('#window-container').innerHTML = popup;
  document.querySelector('body').style = 'overflow: hidden';
  document.querySelector('.window').style = 'display: block; position: fixed; top: 5px; left: 15px';
  document.querySelector('#popup-window').style = 'overflow-y: scroll';
};
projectData(null);

const closeWindow = (status) => {
  if (status === null) return;
  document.body.style.overflow = 'scroll';
  document.querySelector('#window-container').innerHTML = '';
};
closeWindow(null);

// end popup window