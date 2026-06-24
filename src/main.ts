function showHeader():void {
    console.log(`===============================`);
    console.log(`Task Tracker`);
    console.log(`===============================`);
}

type Task = {
    name: string;
    status: "pending" | "completed";
    priority: "low" | "medium" | "high";
    description?: string;
    notes?: string;
    dueDate?: number | string;
    category?: "school" | "spare time";
    tags?: string;

    toggle: () => void;
}

const tasks: Task[] = [{
    name: "Lära mig TypeScript",
    status: "pending",
    priority: "high",

    toggle() {
        this.category = "school";
    },
}, {
    name: "Springa 5 km",
    status: "completed",
    priority: "medium",
    notes: "Tog 10 min",

    toggle() {
        this.description = "Vanliga löparrundan";
    },
}, {
    name: "Städa",
    status: "pending",
    priority: "high",
    description: "Städa förrådet",

    toggle() {
        this.category = this.category === "school" ? "spare time" : "spare time";
    },
}];

function addTask(task: Task) {
    tasks.push(task);
}

function showTasks(): void {
    console.log(tasks);
}

function showPendingTasks(): void {
    for (const task of tasks) {
        if (task.status === "pending") {
         console.log(`Pending task: ${task.name}`);
        }
    }
}

function showCompletedTasks(): void {
    for (const task of tasks) {
        if (task.status === "completed") {
         console.log(`Completed task: ${task.name}`);
        }
    }
}

function showPriorityHigh(): void {
    for (const task of tasks) {
        if (task.priority === "high") {
            console.log(`High priority: ${task.name}`);
        }
    }
}

function completeTask(taskName: string): void {
    for (const task of tasks) {
        if (task.name === taskName) {
            task.status = "completed";
        }
    }
}

function totalTasks(): void {
    console.log(`Total tasks: ${tasks.length}`);
}

function showStatus(): void {
    let completed = 0;
    let pending = 0;
    for (const task of tasks) {
        if (task.status === "completed") {
            completed++;
        } else {
            pending++;
        }
    }
    console.log(`Pending: ${pending} Completed: ${completed}`);
}

function showPriority(): void {
    let prioLow = 0;
    let prioMedium = 0;
    let prioHigh = 0;
    for (const task of tasks) {
        if (task.priority === "high") {
            prioHigh++;
        } else if (task.priority === "medium") {
            prioMedium++;
        } else {
            prioLow++;
        }
    }
    console.log(`High: ${prioHigh} Medium: ${prioMedium} Low: ${prioLow}`);
}

addTask({
    name: "Träna",
    status: "pending",
    priority: "low",

    toggle() {
        this.name = "Träna med flickvännen";
    },
});
addTask({
    name: "Hoppa hopprep",
    status: "completed",
    priority: "medium",
    description: "Det säger sig självt",
    notes: "Jag fastnade i repet",

    toggle() {
        this.notes = "Det gjorde ont";
    },
});
addTask({
    name: "Hämta posten",
    status: "completed",
    priority: "low",
    category: "spare time",
    dueDate: 2026,

    toggle() {
        this.tags = "Post från Cubus";
    },
})

const app = document.querySelector("#app");

function renderTasks(): void {
    if (app) {
        app.innerHTML = "";
    }
    
    const total = document.createElement("h2");
    total.textContent = `Total tasks: ${tasks.length}`

    app?.append(total);

    for (const task of tasks) {
        const name = document.createElement("h3");
        name.textContent = task.name;
        name.classList.add("task-title");

        const status = document.createElement("p");
        status.textContent = `Status: ${task.status}`;

        const priority = document.createElement("p");
        priority.textContent = `Priority: ${task.priority}`;
        if (task.priority === "high") {
            priority.classList.add("task-priority-high");
        }

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.classList.add("task-btn");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("task-btn");

        app?.append(
            name,
            status,
            priority,
            completeButton,
            deleteButton
        );
    }
}

renderTasks();