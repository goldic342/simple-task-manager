import "./style.css";
import NavigationBar from "./components/navBar";
import Timeline from "./components/timeline";
import SideBar from "./components/sideBar";
import { Task } from "./core/tasks";
import { initTimezone } from "./core/timezone";

// For debug
window.Task = Task;

const renderApp = () => {
  const appElement = document.querySelector("#app");
  appElement.className = "bg-gray-50 min-h-screen";

  appElement.innerHTML = `
  <nav></nav>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div id="side-bar"></div>
      <div id="timeline"></div>
    </div>
  </main>
`;

  NavigationBar(appElement.querySelector("nav"));
  Timeline(appElement.querySelector("#timeline"));
  SideBar(appElement.querySelector("#side-bar"));

  initTimezone(appElement);
};

document.addEventListener("DOMContentLoaded", renderApp);
