// Create new row (battery - string-1)
document.getElementById('add-new-battery-string-1').addEventListener('click', function() {
    const newRow = document.createElement('div');
    newRow.classList.add('col-span-4', 'grid', 'grid-cols-4', 'border-none');
 
    // Create the new row with unique Ids
    const timestamp = new Date().getTime();
    newRow.innerHTML = `
        <input type="number" name="string1-volt${timestamp}" id="string1-volt${timestamp}" placeholder="0">
        <input type="number" name="string1-mOHM${timestamp}" id="string1-mOHM${timestamp}" placeholder="0">
        <select name="string1-status${timestamp}" id="string1-status${timestamp}">
            <option value="pass">Pass</option>
            <option value="fail">Fail</option>
        </select>
        <div class="flex justify-around px-2 items-center">
            <img src="/static/images/Delete.png" alt="delete" class="h-[20px]" onclick="removeRow(this)">
        </div>
    `;

    // Append the new row as a child of the battery-table-string-1
    const materialPanel = document.getElementById('battery-table-string-1');
    materialPanel.appendChild(newRow);
});

// Create new row (battery - string-2)
document.getElementById('add-new-battery-string-2').addEventListener('click', function() {
    const newRow = document.createElement('div');
    newRow.classList.add('col-span-4', 'grid', 'grid-cols-4', 'border-none');
 
    // Create the new row with unique Ids
    const timestamp = new Date().getTime();
    newRow.innerHTML = `
        <input type="number" name="string2-volt${timestamp}" id="string2-volt${timestamp}" placeholder="0">
        <input type="number" name="string2-mOHM${timestamp}" id="string2-mOHM${timestamp}" placeholder="0">
        <select name="string2-status${timestamp}" id="string2-status${timestamp}">
            <option value="pass">Pass</option>
            <option value="fail">Fail</option>
        </select>
        <div class="flex justify-around px-2 items-center">
            <img src="/static/images/Delete.png" alt="delete" class="h-[20px]" onclick="removeRow(this)">
        </div>
    `;

    // Append the new row as a child of the battery-table-string-2
    const materialPanel = document.getElementById('battery-table-string-2');
    materialPanel.appendChild(newRow);
});

// Delete the selected row (battery - string)
function removeRow(element) {
    const row = element.parentElement.parentElement;
    row.remove();
}
