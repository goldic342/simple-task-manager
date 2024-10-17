const NavigationBar = (element) => {
  element.className = "bg-white shadow-sm";
  element.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <i class="fas fa-tasks text-indigo-600 text-2xl"></i>
            <span class="ml-2 text-xl font-semibold text-gray-900">Task Timeline</span>
          </div>
          <div class="flex items-center space-x-4">
            <select id="timezone" class="rounded-md border-gray-300 bg-white shadow-sm focus:border-indigo-300 p-2 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value="UTC">UTC</option>
              <option value="UTC+1">UTC+1</option>
              <option value="UTC+2">UTC+2</option>
              <option value="UTC+3">UTC+3</option>
            </select>
            <button id="randomTasks" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-indigo-500 duration-300 ease-in-out">
              <i class="fas fa-random mr-2"></i>
              Random Tasks
            </button>
          </div>
        </div>
    </div>
    `;
};

export default NavigationBar;
