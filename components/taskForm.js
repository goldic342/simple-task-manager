const TaskForm = (element) => {
  element.innerHTML = `
    <div class="space-y-4">
        <h2 class="text-lg font-medium text-gray-900">Add New Task</h2>

        <div>
            <label class="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2">
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700">Description</label>
            <textarea class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 resize-none" rows="3"></textarea>
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700">Priority</label>
            <select class="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50 p-2">
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
            </select>
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700">Deadline</label>
            <input type="datetime-local" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50 p-2">
        </div>

        <button class="w-full flex justify-center py-2 px-4 duration-300 ease-in-out border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Add Task
        </button>
    </div>
`;
};

export default TaskForm;
