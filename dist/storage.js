import { selectTask } from "./tasks.js";
export function saveTasksToLocal() {
    const jsonSave = JSON.stringify(selectTask());
    localStorage.setItem("tasks", jsonSave);
}
export function loadTasksFromLocal() {
    const jsonLoad = localStorage.getItem("tasks");
    if (jsonLoad === null) {
        return;
    }
    tasks = JSON.parse(jsonLoad);
}
//# sourceMappingURL=storage.js.map