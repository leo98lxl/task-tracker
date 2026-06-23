function showHeader():void {
    console.log(`===============================`);
    console.log(`Task Tracker`);
    console.log(`===============================`);
}

type Task = {
    name: string;
    completed: boolean;
    priority?: number;
}

const tasks: Task[] = [ {
    name: "Lära mig TS",
    completed: false,
    priority: 5, 
}, {
    name: "Diska",
    completed: true, 
}, {
    name: "Springa 5 km",
    completed: false,
    priority: 4, 
}
];

const taskNames = tasks.map(task => task.name);

function addTask(task: Task):void {
    tasks.push(task);
}

function showTask(task: Task | undefined):void {
    console.log(task?.name);
}

function completeTask(taskName: string):void {
    for (const task of tasks) {
        if (task.name === taskName) {
            task.completed = true;
        } 
    }
}

function showPendingTasks():void {
    for (const task of tasks) {
        if (!task.completed) {
            console.log(task.name);
        } 
    }
}

function showCompletedTasks():void {
    for (const task of tasks) {
        if (task.completed) {
            console.log(task.name);
        } 
    }
}

function showStatistics():void {
    let completed = 0;
    let pending = 0;
    for (const task of tasks) {
        if (task.completed) {
            completed++;
    } else { 
        pending++;
    }
    }
    console.log(`Completed: ${completed} Pending: ${pending}`);
}

showHeader();
showTask(tasks[1]);
addTask({
    name: "Gå ut med hunden",
    completed: false,
    priority: 2
});
completeTask("Springa 5 km");
showCompletedTasks();
showPendingTasks();
showStatistics();

console.log(taskNames);

//Tisdag

type Task2 = {
    name: string;
    completed: boolean;
    priority: number;
};

const task2: Task2 = {
    name: "TS",
    completed: true,
    priority: 5
};

const tasks2: Task[] = [];
tasks2.push({
    name: "Träna",
    completed: false,
    priority: 2,
});

function showTask2(task2: Task2): void {
    console.log(task2.name);
}

function addTask2(task2: Task2): void {
    tasks2.push(task2);
}

showTask2(task2);
addTask2({
    name: "Springa",
    priority: 3,
    completed: true
});

type Username = string;

const user: Username = "Leo";

type Age = number;

const age: Age = 28;

let value: string | number;
value: 42;
value: "Hej";

type Id = string | number;
const userId: Id = 123;

type Task3 = {
    name: string;
    status: "pending" | "completed";
    priority: "low" | "medium" | "high";
};

function updateStatus(status: "pending" | "completed"): void {
    console.log(status);
}

updateStatus("completed");

interface User {
    name: string;
    completed: "pending" | "completed";
    
    toggle: () => void;
}

const admin: User = {
    name: "Leo",
    completed: "pending",

    toggle() {
        this.completed = this.completed === "pending" ? "completed" : "pending";
    },
};

interface Person {
    name: string;
};

interface ContactInfo {
    email: string;
}

interface Student extends Person, ContactInfo {
    course: string;
}

enum Direction {
    North,
    South,
    West,
    East
};

console.log(Direction.East);

type Admin = Username & Age;