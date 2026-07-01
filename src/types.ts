export type Task = {
    id: number;
    name: string;
    status: "pending" | "completed";
    priority: "low" | "medium" | "high";
    description?: string;
    notes?: string;
    dueDate?: number | string;
    category?: "school" | "spare time";
    tags?: string;
}

export type TaskPriority = "low" | "medium" | "high";

export type Status = "pending" | "completed";