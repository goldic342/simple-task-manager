const Timeline = (element) => {
  element.className = "lg:col-span-3";
  element.innerHTML = `
    <div class="bg-white rounded-lg shadow">
        <div class="border-b border-gray-200 p-4">
            <div class="flex items-center justify-between">
                <h2 class="text-lg font-medium text-gray-900">Timeline</h2>
                <div class="flex space-x-2">
                    <button class="duration-300 ease-in-out inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                        <i class="fas fa-chevron-left mr-1"></i> Previous
                    </button>
                    <button class="duration-300 ease-in-out inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                        Next <i class="fas fa-chevron-right ml-1"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="p-4">
            <div class="grid grid-cols-12 gap-2">
                <div class="task-slot border rounded p-2 text-center text-sm text-gray-600">9 AM</div>
                <div class="task-slot border rounded p-2 text-center text-sm text-gray-600">10 AM</div>
                <!-- More time slots -->
            </div>

            <div id="tasksContainer" class="mt-4 space-y-2">
                <!-- Tasks will be added here dynamically -->
            </div>
        </div>
    </div>
    `;
};

export default Timeline;
