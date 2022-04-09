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
  image: './assets/nature.png',
  title: 'Tonic',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
  spans: [
    'CANBOY',
    'Back End Dev',
    '2018',
  ],
  skills: [
    'HTML',
    'Ruby on rails',
    'CSS',
    'JavaScript',
  ],
  liveLink: 'https://ibr5500.github.io/Portfolio/',
  sourceLink: 'https://github.com/ibr5500/Portfolio',
},
{
  id: 2,
  image: './assets/art.png',
  title: 'Multi-Post Stories',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
  spans: [
    'Facebook',
    'Full Stack Dev',
    '2018',
  ],
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
  ],
  liveLink: 'https://ibr5500.github.io/Portfolio/',
  sourceLink: 'https://github.com/ibr5500/Portfolio',
},
{
  id: 3,
  image: './assets/avocode.png',
  title: 'Facebook 360',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
  spans: [
    'Facebook',
    'Full Stack Dev',
    '2018',
  ],
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
  ],
  liveLink: 'https://ibr5500.github.io/Portfolio/',
  sourceLink: 'https://github.com/ibr5500/Portfolio',
},
{
  id: 4,
  image: './assets/avaliability.png',
  title: 'Uber Navigation',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
  spans: [
    'Uber',
    'Lead Developer',
    '2018',
  ],
  skills: [
    'HTML',
    'Ruby on rails',
    'CSS',
    'JavaScript',
  ],
  liveLink: 'https://ibr5500.github.io/Portfolio/',
  sourceLink: 'https://github.com/ibr5500/Portfolio',
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

// validation for email
function chckValidation(elem) {
  if (!elem) {
    document.querySelector('small').style = 'display: block';
    document.querySelector('small').innerHTML = 'Please write your email in lowercase.';
    document.querySelector('.form-email').style = 'border: 3px red solid';
  }
}

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('.form-email').value;
  if (email !== email.toLowerCase()) {
    chckValidation(false);
    return;
  }
  form.submit();
  form.reset();
  chckValidation(true);
});
// end of validation

// Local Storge

const inputs = document.querySelectorAll('.formInput');
inputs.forEach((input) => {
  input.addEventListener('change', (e) => {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!userInfo) {
      userInfo = { name: '', email: '', message: '' };
    }
    userInfo[e.target.name] = e.target.value;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  });
});

function getInfo() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (userInfo) {
    document.getElementById('name').value = userInfo.name;
    document.getElementById('email').value = userInfo.email;
    document.getElementById('message').value = userInfo.message;
  }
}

getInfo();

// end of local Storge