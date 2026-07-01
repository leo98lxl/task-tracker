export const app = document.querySelector("#app") as HTMLDivElement;
app.classList.add("app");

export const dashboard = document.createElement("div") as HTMLDivElement;

export const taskInput = document.querySelector("#task-input") as HTMLInputElement;
taskInput.classList.add("task-input");

export const priorityInput = document.querySelector("#priority-input") as HTMLSelectElement;
priorityInput.classList.add("priority-input");

export const errorMessage = document.querySelector("#error-message") as HTMLParagraphElement;