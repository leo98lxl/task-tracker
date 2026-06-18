const tasks = [`Lära mig TypeScript`, `Träna`, `Handla`, `Tvätta`, `Plugga`];
function showHeader() {
    console.log(`===============================`);
    console.log(`Task Tracker`);
    console.log(`===============================`);
}
function showTasks() {
    console.log(tasks);
}
function showTasksTotal() {
    console.log(`Antal uppgifter: ${tasks.length}`);
}
function addTask(taskName) {
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
export {};
//# sourceMappingURL=main.js.map