const tasks = [`Lära mig TypeScript`, `Träna`, `Handla`, `Tvätta`, `Plugga`];

function showHeader():void {
    console.log(`===============================`);
    console.log(`Task Tracker`);
    console.log(`===============================`);
}

function showTasks():void {
    console.log(tasks);
}

function showTasksTotal():void {
    console.log(`Antal uppgifter: ${tasks.length}`);
}

function addTask(taskName: string):void {
    tasks.push(taskName);
}

showHeader();
showTasks();
showTasksTotal();
addTask("Hämta bilen");
showTasks();
showTasksTotal();

let taskPriority = 4;
const message = taskPriority >= 5 ? "Obligatoriskt!" : "Frivilligt";
console.log(message);