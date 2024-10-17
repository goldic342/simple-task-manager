const Notification = (element) => {
  element.innerHTML = `
    <div id="notification" class="fixed bottom-4 right-4 max-w-sm w-full bg-white rounded-lg shadow-lg pointer-events-auto">
        <div class="p-4">
            <div class="flex items-start">
                <div class="flex-shrink-0">
                    <i class="fas fa-info-circle text-indigo-600"></i>
                </div>
                <div class="ml-3 w-0 flex-1">
                    <p class="text-sm font-medium text-gray-900" id="notificationTitle"></p>
                    <p class="mt-1 text-sm text-gray-500" id="notificationMessage"></p>
                </div>
                <div class="ml-4 flex-shrink-0 flex">
                    <button class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span class="sr-only">Close</span>
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
};

export default Notification;
