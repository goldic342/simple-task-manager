import Statistics from "./stats";
import TaskForm from "./taskForm";

const SideBar = (element) => {
  element.className = "lg:col-span-1";

  element.innerHTML = `
    <div class="bg-white rounded-lg shadow p-6">
        <div id="task-form"></div>
        
        <div id="tasks-stats"></div>
    </div>
    `;
  Statistics(document.querySelector("#tasks-stats"));
  TaskForm(document.querySelector("#task-form"));
};

export default SideBar;
