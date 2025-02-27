function measurementResultView() {
    var measurementResultContainer = document.getElementById('measurement-result-container');
    var measurementResultContainerTabletView = document.getElementById('measurement-result-container-tablet-view');

    var windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
        measurementResultContainer.style.display = "block";
        measurementResultContainerTabletView.style.display = "none";
    } else {
        measurementResultContainer.style.display = "none";
        measurementResultContainerTabletView.style.display = "block";
    }
}
measurementResultView();
window.addEventListener('resize', measurementResultView);

// Create new row (material/ panel)
document.getElementById('add-new-material-panel').addEventListener('click', function() {
    const newRow = document.createElement('div');
    newRow.classList.add('col-span-5', 'grid', 'grid-cols-5', 'border-none');

    // Create new the row
    newRow.innerHTML = `
        <input class="col-span-3" type="text" name="input1" placeholder="material/panel">
        <input type="number" name="input4" placeholder="qty">
        <div class="flex justify-around px-2 items-center">
        <img src="/static/images/Delete.png" alt="delete" class="h-[20px]" onclick="removeRow(this)">
        </div>
    `;

    // Append the new row as a child of the material-panel-table
    const materialPanel = document.getElementById('material-panel-table');
    materialPanel.appendChild(newRow);
});

// Delete the selected row (material/ panel - unit/part number)
function removeRow(element) {
    const row = element.parentElement.parentElement;
    row.remove();
}

// Create new row (unit/part number)
document.getElementById('add-new-unit-partNumber').addEventListener('click', function() {
    const newRow = document.createElement('div');
    newRow.classList.add('grid', 'grid-cols-7', 'col-span-7', 'border-none');

    // Create the new row with unique Ids
    const timestamp = new Date().getTime();
    newRow.innerHTML = `
        <input class="col-span-2" type="text" name="unit${timestamp}" id="unit${timestamp}" placeholder="unit">
        <input class="col-span-2" type="text" name="partNumber${timestamp}" id="partNumber${timestamp}" placeholder="part number">
        <input type="number" name="qty${timestamp}" id="qty${timestamp}" placeholder="qty">
        <input type="number" name="unitQty${timestamp}" id="unitQty${timestamp}" placeholder="unit">
        <div class="flex justify-around px-2 items-center">
        <img src="/static/images/Delete.png" alt="delete" class="h-[20px]" onclick="removeRow(this)">
        </div>
    `;

    // Append the new row as a child of the unit-partNumber-table
    const unitPartNumberTable = document.getElementById('unit-partNumber-table');
    unitPartNumberTable.appendChild(newRow);
});
