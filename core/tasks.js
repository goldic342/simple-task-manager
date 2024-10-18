export class Task {
  static properties = [
    "title",
    "priority",
    "deadline",
    "timezone",
    "status",
    "id",
    "description",
  ];
  static editable_props = [
    "deadline",
    "priority",
    "status",
    "title",
    "timezone",
    "description",
  ];
  static nullable_props = ["description", "id"];

  static get_all() {
    return JSON.parse(localStorage.getItem("tasks"));
  }

  constructor(
    title,
    priority,
    deadline,
    timezone,
    status,
    id = null,
    description = null,
  ) {
    const properties = { title, priority, deadline, timezone, status };

    // checking for props to be set
    for (const [key, value] of Object.entries(properties)) {
      if (!value) {
        throw new Error(`${key} is not assigned`);
      }
    }

    this.title = title;
    this.description = description;
    this.priority = priority;
    this.deadline = deadline;
    this.id = id ? id : Date.now();
    this.timezone = timezone;
    this.status = status;

    // Init tasks in local storage
    if (!Task.get_all()) {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }

  add() {
    const tasks = Task.get_all();

    for (let task of tasks) {
      if (task.id === this.id) {
        throw new TypeError("Task with this id already exsists");
      }
    }

    tasks.push(this);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    return null;
  }

  static remove(task_id) {
    const tasks = Task.get_all();
    let removed_task;

    for (let task of tasks) {
      if (task_id === task.id) {
        removed_task = tasks.splice(tasks.indexOf(task), 1);
      }
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    return removed_task;
  }

  static update(task_id, properties) {
    // Validating keys
    for (let [key, value] of Object.entries(properties)) {
      if (!Task.editable_props.includes(key)) {
        throw new TypeError("Unknown prop or prop is not editable");
      }

      if (!Task.nullable_props.includes(key) && !value) {
        throw new TypeError("Property is not nullable");
      }

      // Excluding id
      if (key === "id") {
        throw new TypeError("ID is not updateable");
      }
    }

    const tasks = Task.get_all();

    for (let task of tasks) {
      if (task_id === task.id) {
        for (let [key, value] of Object.entries(properties)) {
          task[key] = value;
        }
      }
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));

    return null;
  }
}
