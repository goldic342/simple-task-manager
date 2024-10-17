const TaskTemplate = (element) => {
  element.innerHTML = `
    <template id="taskTemplate">
        <div class="task-item bg-white rounded-lg shadow p-4 border-l-4 transition transform hover:-translate-y-1 hover:shadow-md">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <div class="text-sm font-medium text-gray-900" data-task-title></div>
                    <span class="ml-2 px-2 py-1 text-xs rounded-full" data-task-priority></span>
                </div>
                <div class="flex items-center space-x-2">
                    <button class="text-gray-400 hover:text-gray-500">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="text-gray-400 hover:text-red-500">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="mt-2 text-sm text-gray-500" data-task-description></div>
            <div class="mt-2 flex items-center text-xs text-gray-500">
                <i class="fas fa-clock mr-1"></i>
                <span data-task-deadline></span>
            </div>
        </div>
    </template>
    `;
}

export default TaskTemplate