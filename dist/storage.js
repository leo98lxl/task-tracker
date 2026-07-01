import { getTaskArray, setTaskArray } from "./tasks.js";
export function saveTasksToLocal() {
    const jsonSave = JSON.stringify(getTaskArray());
    localStorage.setItem("tasks", jsonSave);
}
export function loadTasksFromLocal() {
    const jsonLoad = localStorage.getItem("tasks");
    if (jsonLoad === null) {
        return;
    }
    setTaskArray(JSON.parse(jsonLoad));
}
export let date = new Date().toLocaleString("sv-SE");
export function saveTasksDate() {
    const jsonSaveTitle = `Last saved:`;
    const jsonSaveTime = JSON.stringify(date);
    localStorage.setItem(jsonSaveTitle, jsonSaveTime);
}
//# sourceMappingURL=storage.js.map