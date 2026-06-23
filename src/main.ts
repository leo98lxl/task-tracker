function showHeader():void {
    console.log(`===============================`);
    console.log(`Task Tracker`);
    console.log(`===============================`);
}

interface Task {
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
    name: "Lära mig TS",
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
    status: "pending",
    priority: "low",
    category: "spare time",
    dueDate: 2026,

    toggle() {
        this.tags = "Post från Cubus";
    },
})
showHeader();
showTasks();
showPendingTasks();
showCompletedTasks();
showPriorityHigh();
totalTasks();
showStatus();
showPriority();