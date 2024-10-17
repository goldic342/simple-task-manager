const Statistics = (element) => {
  element.innerHTML = `
    <div class="mt-8">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Statistics</h2>
        <div class="space-y-4">
            <div class="bg-gray-50 rounded-lg p-4">
                <div class="text-sm text-gray-500">Total Tasks</div>
                <div class="text-2xl font-semibold text-gray-900">0</div>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
                <div class="text-sm text-gray-500">Completed</div>
                <div class="text-2xl font-semibold text-green-600">0</div>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
                <div class="text-sm text-gray-500">Pending</div>
                <div class="text-2xl font-semibold text-yellow-600">0</div>
            </div>
        </div>
    </div>
    `;
}

export default Statistics