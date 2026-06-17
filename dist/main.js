const tasks = [`Lära mig TypeScript`, `Träna`, `Handla`, `Tvätta`, `Plugga`];
let tasksCompleted = 2;
console.log(`===============================`);
console.log(`Task Tracker`);
console.log(`===============================`);
for (let i = 0; i < tasks.length; i++) {
    console.log(i, tasks[i]);
}
console.log(`Antal uppgifter: ${tasks.length}`);
if (tasksCompleted < tasks.length) {
    console.log(`Avklarade uppgifter: ${tasksCompleted}`);
}
else {
    console.log("Bra jobbat!");
}
export {};
//# sourceMappingURL=main.js.map