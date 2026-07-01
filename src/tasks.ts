import type { Task } from "./types.js";

let nextId = 1;

let tasks: Task[] = [];

export function selectId() {
    return nextId;
}

export function selectTask() {
    return tasks;
}