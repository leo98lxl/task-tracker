import type { Status, Task, TaskPriority } from "./types.js";
export declare function selectId(): number;
export declare function getTaskArray(): Task[];
export declare function setTaskArray(newTasks: Task[]): void;
export declare const showTaskStatus: (status: Status) => Task[];
export declare function existingTask(name: string): boolean;
export declare function validateTaskInput(name: string): string;
export declare function newTask(name: string, priority: TaskPriority): void;
export declare function toggleTask(id: number): void;
export declare function removeTask(id: number): void;
export declare function resetForm(): void;
//# sourceMappingURL=tasks.d.ts.map