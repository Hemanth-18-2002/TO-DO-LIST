// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskNameInput = document.getElementById('task-name');
    const taskDueDateInput = document.getElementById('task-due-date');
    const taskPrioritySelect = document.getElementById('task-priority');
    const addTaskButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskName = taskNameInput.value;
        const taskDueDate = taskDueDateInput.value;
        const taskPriority = taskPrioritySelect.value;

        if (taskName === '') {
            alert('Please enter a task name.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${taskName} - Due: ${taskDueDate} - Priority: ${taskPriority}</span>
            <div>
                <button class="complete-task-btn">Complete</button>
                <button class="delete-task-btn">Delete</button>
            </div>
        `;

        const completeTaskButton = taskItem.querySelector('.complete-task-btn');
        const deleteTaskButton = taskItem.querySelector('.delete-task-btn');

        completeTaskButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        deleteTaskButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskList.appendChild(taskItem);

        taskNameInput.value = '';
        taskDueDateInput.value = '';
        taskPrioritySelect.value = 'low';
    });
});
