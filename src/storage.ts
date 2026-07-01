import { selectTask } from "./tasks.js";

export function saveTasksToLocal(): void {
    const jsonSave = JSON.stringify(selectTask());
    localStorage.setItem("tasks", jsonSave);
}

export function loadTasksFromLocal(): void {
    const jsonLoad = localStorage.getItem("tasks");
    if (jsonLoad === null) {
        return;
    }
    tasks = JSON.parse(jsonLoad);
}