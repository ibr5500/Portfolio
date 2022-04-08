//mobile menu
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


// popup window
const openWindow = document.querySelector('.check-project');
const closeWindow = document.getElementById('closeWindow');

const projectsList = [{
        id: 1,
        image: './assets/nature.png',
        title: 'Tonic',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
        spans: [
            'CANBOY',
            'Back End Dev',
            '2018'
        ],
        skills: [
            'HTML',
            'Ruby on rails',
            'CSS',
            'JavaScript'
        ],
        liveLink: 'https://ibr5500.github.io/Portfolio/',
        sourceLink: 'https://github.com/ibr5500/Portfolio'
    },
    {
        id: 2,
        image: './assets/art.png',
        title: 'Multi-Post Stories',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
        spans: [
            'Facebook',
            'Full Stack Dev',
            '2018'
        ],
        skills: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        liveLink: 'https://ibr5500.github.io/Portfolio/',
        sourceLink: 'https://github.com/ibr5500/Portfolio'
    },
    {
        id: 3,
        image: './assets/avocode.png',
        title: 'Facebook 360',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
        spans: [
            'Facebook',
            'Full Stack Dev',
            '2018'
        ],
        skills: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        liveLink: 'https://ibr5500.github.io/Portfolio/',
        sourceLink: 'https://github.com/ibr5500/Portfolio'
    },
    {
        id: 4,
        image: './assets/avaliability.png',
        title: 'Uber Navigation',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
        spans: [
            'Uber',
            'Lead Developer',
            '2018'
        ],
        skills: [
            'HTML',
            'Ruby on rails',
            'CSS',
            'JavaScript'
        ],
        liveLink: 'https://ibr5500.github.io/Portfolio/',
        sourceLink: 'https://github.com/ibr5500/Portfolio'
    }
];

const cards = () => {
        let item = projectsList.map((elem, index) => {
                    return ` <div class="card flex">
            <div class="${index % 2 == 0 ? 'card-items': 'card-items-reverse'} flex">
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
                    ${elem.skills.map((e) => { return `<li>${e}</li>` }).join('')}
                    </ul>
                    <div class="button-container flex">
                        <button onclick="projectData(${elem.id})" type="button" class="check-project button flex">See Project</button>
                    </div>
                </div>
            </div>
        </div>`
    });
    return item;
};

window.addEventListener('load', () => {
    document.getElementById('cards-container').innerHTML = cards();
});

const projectData = (projectId) => {
    console.log(projectId);
    document.querySelector('.window').style = 'display: block; position: fixed; top: 5px; left: 15px';
    document.querySelector('body').style = 'overflow: hidden';
    document.querySelector('#popup-window').style = 'overflow-y: scroll';
    let item = projectsList.filter((elem) => elem.id === projectId);
    item = item.shift();
    console.log(item);
    console.log(item.skills);
    document.getElementById('title').innerHTML = item.title;
    document.getElementById('co').innerHTML = item.spans[0];
    document.getElementById('po').innerHTML = item.spans[1];
    document.getElementById('y').innerHTML = item.spans[2];
    document.getElementById('img').src = item.image;
    document.getElementById('descrip').innerHTML = item.description;
    let skill = item.skills.map((elem) => { return `<li>${elem}</li>` }).join('');
    document.getElementById('li').innerHTML = skill;
};

openWindow.addEventListener('click', () => projectData);
closeWindow.onclick = function closeWindow() {
    document.querySelector('#window-container').style = 'display: none';
    location.reload();
};
// end