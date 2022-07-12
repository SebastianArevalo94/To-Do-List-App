let taskNumber = 0;
let taskArray = [];

const addTask = () => {
    function firstLetterCapital(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    let taskName = document.querySelector('#taskInput');
    if (taskName.value === '') {
        document.getElementById('dialog-default').showModal();
    } else {
        taskNumber = taskNumber + 1;
        let taskTime = new Date().toLocaleTimeString();
        let taskContainer = document.querySelector('#taskContainer');
        let body = document.querySelector('#body');
        let taskDark = `
            <div id='onlyTask' class="onlyTask nes-container with-title is-dark">
                <p class="title">Tarea ${taskNumber}</p>
                <label>
                    <input id='checkTask' type="checkbox" class="onlyCheck nes-checkbox is-dark" />
                    <span>${firstLetterCapital(taskName.value)}</span>
                </label>
                <div class="timeContainer">
                    <p class="taskTime">${taskTime}</p>
                </div>
            </div>`;
        let taskLight = `
            <div id='onlyTask' class="onlyTask nes-container with-title">
                <p class="title">Tarea ${taskNumber}</p>
                <label>
                    <input id='checkTask' type="checkbox" class="onlyCheck nes-checkbox" />
                    <span>${firstLetterCapital(taskName.value)}</span>
                </label>
                <div class="timeContainer">
                    <p class="taskTime">${taskTime}</p>
                </div>
            </div>`;

        if (body.className === 'light') {
            taskContainer.innerHTML += taskLight;

        } else {
            taskContainer.innerHTML += taskDark;
        };
        taskArray.push({ taskName: firstLetterCapital(taskName.value), taskId: taskNumber, taskTime: taskTime });
        console.log(taskArray)
        taskName.value = '';
    };
}



const clean = () => {
    let taskContainer = document.querySelector('#taskContainer');
    taskContainer.innerHTML = ``;
    taskNumber = 0;
    taskArray = [];
};


const changeTheme = () => {
    let body = document.querySelector('#body');
    let titleApp = document.querySelector('#titleApp');
    let addTaskContainer = document.querySelector('#addTaskContainer');
    let label = document.querySelector('#taskLabel');
    let input = document.querySelector('#taskInput');
    let icon = document.querySelector('#themeImg');
    let icons = {
        moon: 'https://img.icons8.com/ios-glyphs/60/000000/moon-symbol.png',
        sun: 'https://img.icons8.com/ios-glyphs/60/ffffff/sun--v1.png'
    };

    if (body.className === 'light') {
        icon.src = icons.sun;
        body.className = 'dark';
        titleApp.className = 'titleAppDark';
        addTaskContainer.className = 'addTask nes-container dark addTaskDark';
        input.className = 'nes-input is-dark';
        label.style.color = '#fff';
        if (taskArray.length !== 0) {
            let taskList = document.querySelectorAll('.onlyTask');
            let arrayTaskList = Array.from(taskList);
            let checkList = document.querySelectorAll('.onlyCheck');
            let arrayCheckList = Array.from(checkList);
            arrayTaskList.forEach(task => {
                task.className = 'onlyTask nes-container with-title is-dark';
            });
            arrayCheckList.forEach(check => {
                check.className = 'onlyCheck nes-checkbox is-dark';
            });
        };
    } else {
        icon.src = icons.moon
        body.className = 'light';
        titleApp.className = 'titleAppLight';
        addTaskContainer.className = 'addTask nes-container';
        input.className = 'nes-input';
        label.style.color = '#000';
        if (taskArray.length !== 0) {
            let taskList = document.querySelectorAll('.onlyTask');
            let arrayTaskList = Array.from(taskList);
            let checkList = document.querySelectorAll('.onlyCheck');
            let arrayCheckList = Array.from(checkList);
            arrayTaskList.forEach(task => {
                task.className = 'onlyTask nes-container with-title';
            });
            arrayCheckList.forEach(check => {
                check.className = 'onlyCheck nes-checkbox';
            });
        };
    };
};

const playClick = () => {
    let clickSound = new Audio();
    clickSound.src = './assets/click.mp3';
    clickSound.play();
};