/* ==========================================
   GO TO SPACE
========================================== */

function goToSpace() {

    document
        .getElementById("space")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ==========================================
   DARK MODE
========================================== */

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀";

    } else {

        themeButton.textContent = "☾";

    }

});


/* ==========================================
   RANDOM QUOTES
========================================== */

const quotes = [

    "You don't have to have everything figured out.",

    "Small progress is still progress. ♡",

    "You're doing better than you think.",

    "Rest is part of the process.",

    "Don't forget to be proud of yourself.",

    "One day at a time. ✦",

    "You deserve good things too."

];


let quoteIndex = 0;


function newQuote() {

    quoteIndex++;

    if (quoteIndex >= quotes.length) {

        quoteIndex = 0;

    }

    document.getElementById("quote")
        .textContent = quotes[quoteIndex];

}


/* ==========================================
   POMODORO TIMER
========================================== */

let timerInterval;


function startTimer() {

    const timer =
        document.getElementById("timer");


    timer.style.display = "block";


    let seconds = 25 * 60;


    clearInterval(timerInterval);


    function updateTimer() {

        const minutes =
            Math.floor(seconds / 60);


        const remainingSeconds =
            seconds % 60;


        timer.textContent =

            `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;


        if (seconds <= 0) {

            clearInterval(timerInterval);

            timer.textContent = "Done ✦";

            return;

        }


        seconds--;

    }


    updateTimer();


    timerInterval =
        setInterval(updateTimer, 1000);
        

}


/* ==========================================
   BREATHING
========================================== */

function breathe() {

    alert(

        "Breathe in... 4 seconds\n\n" +

        "Hold... 4 seconds\n\n" +

        "Breathe out... 4 seconds ♡"

    );

}

/* ==========================================
   24-HOUR TASK SYSTEM
========================================== */

let tasks = JSON.parse(
    localStorage.getItem("diyaTasks")
) || [];


/* ------------------------------------------
   SAVE TASKS
------------------------------------------ */

function saveTasks() {

    localStorage.setItem(
        "diyaTasks",
        JSON.stringify(tasks)
    );

}


/* ------------------------------------------
   REMOVE EXPIRED TASKS
------------------------------------------ */

function removeExpiredTasks() {

    const now = Date.now();

    tasks = tasks.filter(task => {

        return now < task.expiresAt;

    });

    saveTasks();

}


/* ------------------------------------------
   ADD NEW TASK
------------------------------------------ */

function addTask() {

    const input =
        document.getElementById("taskInput");

    const taskText =
        input.value.trim();


    if (taskText === "") {

        return;

    }


    const now = Date.now();

    const twentyFourHours =
        24 * 60 * 60 * 1000;


    const newTask = {

        id: Date.now(),

        text: taskText,

        completed: false,

        createdAt: now,

        expiresAt: now + twentyFourHours

    };


    tasks.push(newTask);

    saveTasks();

    input.value = "";

    displayTasks();

}


/* ------------------------------------------
   DISPLAY TASKS
------------------------------------------ */

function displayTasks() {

    const list =
        document.getElementById("taskList");


    list.innerHTML = "";


    tasks.forEach(task => {

        const li =
            document.createElement("li");


        li.className = "task-item";


        if (task.completed) {

            li.classList.add("completed");

        }


        li.innerHTML = `

            <span  class="task-text">
                ${task.text}
            </span>

            <div class="task-actions">

                <button

                    class="complete-button"
                    onclick="completeTask(${task.id})">

                    ${task.completed ? "✓" : "○"}

                </button>

                <button

                    onclick="deleteTask(${task.id})">

                    ×

                </button>

            </div>

        `;


        list.appendChild(li);

    });

}


/* ------------------------------------------
   COMPLETE TASK
------------------------------------------ */

function completeTask(id) {

    const task =
        tasks.find(task => task.id === id);


    if (!task) return;


    task.completed =
        !task.completed;


    saveTasks();

    displayTasks();

}


/* ------------------------------------------
   DELETE TASK
------------------------------------------ */

function deleteTask(id) {

    tasks =
        tasks.filter(task => task.id !== id);


    saveTasks();

    displayTasks();

}


/* ------------------------------------------
   LOAD TASKS WHEN WEBSITE OPENS
------------------------------------------ */

function loadTasks() {

    removeExpiredTasks();

    displayTasks();

}


window.addEventListener(
    "load",
    loadTasks
);


/* ------------------------------------------
   CHECK FOR EXPIRATION EVERY MINUTE
------------------------------------------ */

setInterval(function () {

    removeExpiredTasks();

    displayTasks();

}, 60 * 1000);




function saveNotes() {

    const notes =
        document.getElementById("notesArea").value;

    localStorage.setItem("diyaNotes", notes);

    document.getElementById("savedMessage")
        .textContent = "Saved locally ♡";

}


window.addEventListener("load", function () {

    const saved =
        localStorage.getItem("diyaNotes");

    if (saved) {

        document.getElementById("notesArea")
            .value = saved;

    }

});


/* ==========================================
   RANDOM THOUGHTS
========================================== */

const thoughts = [

    "Maybe the best memories are the ones we don't plan.",

    "Some people become important without warning.",

    "Your future self is going to be proud of you.",

    "You probably need more sleep. Just saying. 😂",

    "Life is weird. Keep going anyway.",

    "One day we'll look back at this phase and laugh.",

    "There are still so many memories waiting to happen. ✦"

];


let thoughtIndex = 0;


function randomThought() {

    thoughtIndex++;

    if (thoughtIndex >= thoughts.length) {

        thoughtIndex = 0;

    }


    document.getElementById("randomThought")
        .textContent = thoughts[thoughtIndex];

}


/* ==========================================
   LATE NIGHT MODE
========================================== */

function lateNight() {

    document.body.classList.add("late-night");

    alert(
        "Late night mode activated. ☾\n\n" +
        "Now please sleep."
    );

}


/* ==========================================
   SURPRISE MODAL
========================================== */

function surprise() {

    document
        .getElementById("modal")
        .classList.add("show");

}


function closeModal() {

    document
        .getElementById("modal")
        .classList.remove("show");

}


/* ==========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================== */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("modal");


    if (event.target === modal) {

        closeModal();

    }

});