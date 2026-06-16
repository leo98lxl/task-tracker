const task1Name: string = "Learn TypeScript";
const task1Priority: number = 4;
const task1Completed: boolean = false;

const task2Name: string = "Walk my dog";
const task2Priority: number = 5;
const task2Completed: boolean = false;

const task3Name: string = "Brush my teeth";
const task3Priority: number = 3;
const task3Completed: boolean = true;

const completedTasks: number = 1;
const totalTasks: number = 3;
const completionRate: number = completedTasks / totalTasks * 100;

console.log(`Task: ${task1Name} 
            Priority: ${task1Priority} 
            Completed: ${task1Completed}`);

console.log(`Task: ${task2Name} 
            Priority: ${task2Priority} 
            Completed: ${task2Completed}`);

console.log(`Task: ${task3Name} 
            Priority: ${task3Priority} 
            Completed: ${task3Completed}`);

console.log(`Completion rate: ${completionRate}`);