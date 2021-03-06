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

const projectsList = [{
  id: 1,
  image: './assets/foodify-kitchenball.png',
  title: 'Foodify Kitchenball',
  description: 'This project was createn as a capstone project, for JavaScript module at Microverse. It was a group project, and we were two members Hammad Siddique and Ibrahim Ahmat. Moreover, this project took a week to be createn from zero. We have used Meal-DB API for it',
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
},
{
  id: 2,
  image: './assets/leader-board.png',
  title: 'Leader Board webapp',
  description: 'I built this project as a solo project, as part of forth week of the second module in Microverse Academy.<br/>And we had to use LeaderBoard Api for it. Moreover, created a new game or ( api game) to store the data from the player. I used JavaScript, CSS, HTML, Webpack, and API for this project',
  spans: [
    'Microverse',
    'Front End Dev',
    '2022',
  ],
  skills: [
    'JavaScript',
    'CSS',
    'HTML',
    'API',
  ],
  liveLink: 'https://ibr5500.github.io/Leader-Board/',
  sourceLink: 'https://github.com/ibr5500/Leader-Board',
},
{
  id: 3,
  image: './assets/ToDo-list.png',
  title: 'ToDo list project',
  description: 'I built this project as a solo project, as part of second week of the second module in Microverse Academy.<br/>And we had to use what we learned in it. Make the website responsive, design, webpack,and JavaScript concepts.',
  spans: [
    'Microverse',
    'Front End Dev',
    '2022',
  ],
  skills: [
    'JavaScript',
    'CSS',
    'HTML',
  ],
  liveLink: 'https://ibr5500.github.io/To-Do-List/',
  sourceLink: 'https://github.com/ibr5500/To-Do-List',
},
{
  id: 4,
  image: './assets/awesome-book.png',
  title: 'Awesome Book',
  description: 'This project was a remote contribution with ( Rwubakwanayo Olivier ), and we built a library system using Object Oriented Programming to add new books to the list you can remove a certain book from the list by clicking on the Remove button.',
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
  liveLink: 'https://github.com/RWUBAKWANAYO/Awesome-Books',
  sourceLink: 'https://github.com/RWUBAKWANAYO/Awesome-Books',
},
{
  id: 5,
  image: './assets/capstone.png',
  title: 'Capstone project',
  description: 'I built this project as a solo project, as part of last week(5) of the first module in Microverse BootCamp or Academy.<br/>And we had to use some of what we learned in the past month. Make the website responsive, design, and some JavaScript concepts.',
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
  liveLink: 'https://ibr5500.github.io/Capstone/',
  sourceLink: 'https://github.com/ibr5500/Capstone',
},
];

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
                            <a class="check-project window-button flex" href="${item.liveLink}" target="???_blank???" rel="noreferrer noopener">
                                See live<i class="fa fa-power-off size"></i>
                            </a>
                            <a class="check-project window-button flex" href="${item.sourceLink}" target="???_blank???" rel="noreferrer noopener">
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