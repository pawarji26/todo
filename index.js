document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const tbody = document.querySelector('tbody');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const taskInput = document.getElementById('task');
      const prioritySelect = document.getElementById('priority');
  
      const task = taskInput.value.trim();
      const priority = prioritySelect.value;
  
      if (task && priority) {
        // Create a new table row
        const newRow = document.createElement('tr');
  
        // Add task and priority cells
        const taskCell = document.createElement('td');
        taskCell.textContent = task;
        newRow.appendChild(taskCell);
  
        const priorityCell = document.createElement('td');
        priorityCell.textContent = priority;
        newRow.appendChild(priorityCell);
  
        // Add a placeholder for the "Favourite" cell
        const favoriteCell = document.createElement('td');
        favoriteCell.textContent = '⭐'; // You can customize this as needed
        newRow.appendChild(favoriteCell);
  
        // Append the new row to the table body
        tbody.appendChild(newRow);
  
        // Clear the form inputs
        taskInput.value = '';
        prioritySelect.value = '';
      }
    });
  });
  