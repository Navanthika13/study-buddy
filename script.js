const lessonCards = document.getElementById('lessonCards');
const streakValue = document.getElementById('streakValue');
const progressMeter = document.getElementById('progressMeter');
const progressValue = document.getElementById('progressValue');
const recommendationText = document.getElementById('recommendationText');
const lessonCount = document.getElementById('lessonCount');
const quizScore = document.getElementById('quizScore');
const taskCount = document.getElementById('taskCount');
const plannerForm = document.getElementById('plannerForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const questionText = document.getElementById('questionText');
const answerOptions = document.getElementById('answerOptions');
const questionLabel = document.querySelector('.question-label');
const nextButton = document.getElementById('nextButton');
const quizFeedback = document.getElementById('quizFeedback');

const lessons = [
    { title: 'Basic math review', description: 'Refresh numbers, addition, subtraction, and quick problem solving.' },
    { title: 'Reading comprehension', description: 'Practice identifying main ideas and reading faster with focus.' },
    { title: 'Science facts', description: 'Explore simple science concepts and how to connect them to daily life.' },
    { title: 'Memory techniques', description: 'Learn easy study methods that help you remember information.' },
];

const quizQuestions = [
    {
        question: 'What is 8 x 7?',
        options: ['54', '56', '58', '60'],
        answer: 1,
    },
    {
        question: 'Which sentence is correct?',
        options: ['He go to school.', 'She is reading a book.', 'They was happy.', 'It are raining.'],
        answer: 1,
    },
    {
        question: 'What is the boiling point of water?',
        options: ['50°C', '75°C', '100°C', '120°C'],
        answer: 2,
    },
    {
        question: 'Which technique helps remember a list?',
        options: ['Cramming', 'Repetition', 'Guessing', 'Skipping'],
        answer: 1,
    },
    {
        question: 'Which is a study habit?',
        options: ['Studying in short sessions', 'Watching TV while reading', 'Ignoring notes', 'Waiting until the last minute'],
        answer: 0,
    },
];

let completedLessons = 0;
let currentQuizIndex = 0;
let selectedOption = null;
let correctAnswers = 0;
let tasks = [];

function initLessons() {
    lessonCards.innerHTML = lessons.map((lesson, index) => {
        return `
            <article class="lesson-card">
                <h3>${lesson.title}</h3>
                <p>${lesson.description}</p>
                <button class="btn btn-secondary" type="button" data-index="${index}">Mark complete</button>
            </article>
        `;
    }).join('');
}

function updateDashboard() {
    lessonCount.textContent = completedLessons;
    quizScore.textContent = `${correctAnswers} / ${quizQuestions.length}`;
    taskCount.textContent = tasks.length;
    const progress = Math.round((completedLessons / lessons.length) * 100);
    progressMeter.style.width = `${progress}%`;
    progressValue.textContent = `${progress}%`;
    streakValue.textContent = `${Math.min(7, completedLessons + 1)} days`;

    if (completedLessons >= 3) {
        recommendationText.textContent = 'Try a new science challenge!';
    } else {
        recommendationText.textContent = 'Review basic math and reading topics.';
    }
}

function renderTasks() {
    taskList.innerHTML = tasks.map((task, index) => {
        return `
            <li class="task-item">
                <span>${task}</span>
                <button type="button" data-index="${index}">Done</button>
            </li>
        `;
    }).join('');
    taskCount.textContent = tasks.length;
}

function setQuizQuestion() {
    const current = quizQuestions[currentQuizIndex];
    questionText.textContent = current.question;
    questionLabel.textContent = `Question ${currentQuizIndex + 1} of ${quizQuestions.length}`;
    answerOptions.innerHTML = current.options.map((option, index) => {
        return `<button class="option-button" type="button" data-index="${index}">${option}</button>`;
    }).join('');
    selectedOption = null;
    quizFeedback.textContent = '';
    nextButton.textContent = 'Submit answer';
}

function handleOptionClick(event) {
    if (!event.target.matches('.option-button')) return;
    const optionButtons = answerOptions.querySelectorAll('.option-button');
    optionButtons.forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');
    selectedOption = Number(event.target.dataset.index);
}

function handleQuizSubmit() {
    if (selectedOption === null) {
        quizFeedback.textContent = 'Please select an answer first.';
        return;
    }

    const current = quizQuestions[currentQuizIndex];
    const isCorrect = selectedOption === current.answer;
    if (isCorrect) {
        correctAnswers += 1;
        quizFeedback.textContent = 'Nice work! That answer is correct.';
        quizFeedback.style.color = '#16a34a';
    } else {
        quizFeedback.textContent = `Not quite. The correct answer is "${current.options[current.answer]}".`;
        quizFeedback.style.color = '#dc2626';
    }

    nextButton.textContent = currentQuizIndex < quizQuestions.length - 1 ? 'Next question' : 'Finish quiz';
    nextButton.dataset.step = 'review';
}

function nextQuizStep() {
    if (nextButton.dataset.step === 'review') {
        currentQuizIndex += 1;
        if (currentQuizIndex < quizQuestions.length) {
            setQuizQuestion();
        } else {
            questionText.textContent = 'Quiz complete!';
            questionLabel.textContent = '';
            answerOptions.innerHTML = '';
            quizFeedback.textContent = `You scored ${correctAnswers} out of ${quizQuestions.length}. Keep practicing!`;
            quizFeedback.style.color = '#2563eb';
            nextButton.textContent = 'Restart quiz';
            nextButton.dataset.step = 'restart';
            updateDashboard();
        }
    } else if (nextButton.dataset.step === 'restart') {
        currentQuizIndex = 0;
        correctAnswers = 0;
        setQuizQuestion();
        updateDashboard();
    } else {
        handleQuizSubmit();
    }
}

lessonCards.addEventListener('click', event => {
    if (!event.target.matches('button')) return;
    completedLessons += 1;
    updateDashboard();
    event.target.textContent = 'Completed';
    event.target.disabled = true;
});

plannerForm.addEventListener('submit', event => {
    event.preventDefault();
    const value = taskInput.value.trim();
    if (!value) return;
    tasks.push(value);
    taskInput.value = '';
    renderTasks();
});

taskList.addEventListener('click', event => {
    if (!event.target.matches('button')) return;
    const index = Number(event.target.dataset.index);
    tasks.splice(index, 1);
    renderTasks();
});

answerOptions.addEventListener('click', handleOptionClick);
nextButton.addEventListener('click', nextQuizStep);

initLessons();
setQuizQuestion();
updateDashboard();
renderTasks();
