function customWidth() {
    var technicalDetailForm = document.getElementById("technical-detail-form").offsetWidth;
    var measurementResultContainer = document.getElementById("measurement-result-container");
    var measurementResultContainerTabletView = document.getElementById("measurement-result-container-table-view");

    var windowWidth = window.innerWidth;
    var customCalculationGap = 0;
    if (windowWidth >= 1440) {
        measurementResultContainer.style.display = 'block';
        measurementResultContainerTabletView.style.display = 'none';
        customCalculationGap = 64;
    } else if (windowWidth >= 1024 && windowWidth < 1440 ) {
        measurementResultContainer.style.display = 'block';
        measurementResultContainerTabletView.style.display = 'none';
        customCalculationGap = 32;
    } else {
        measurementResultContainer.style.display = 'none';
        measurementResultContainerTabletView.style.display = 'block';
        customCalculationGap = 16;
    }

    var customCalculationInputWidth = (technicalDetailForm - 100 - (customCalculationGap * 3)) / 4

    let customInputWidthElements = document.querySelectorAll('.custom-input-width');
    customInputWidthElements.forEach(function(element) {
        element.width = customCalculationInputWidth;
    });

    let customInputRowElements = document.querySelectorAll('.custom-input-row');
    customInputRowElements.forEach(function(element) {
        element.style.gap = customCalculationGap + 'px';
    });

}
window.addEventListener('resize', customWidth);
customWidth();

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

// Delete the selected row (material/ panel)
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

// Signature pad function
function initializeSignaturePad(canvasId, clearButtonId) {
    var canvas = document.getElementById(canvasId);

    // Resize canvas
    function resizeCanvas() {
        var ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initialize signature pad
    var signaturePad = new SignaturePad(canvas, { backgroundColor: 'rgb(250,250,250)' });

    document.getElementById(clearButtonId).addEventListener('click', function() {
        signaturePad.clear();
    });

    return signaturePad;
}

// Engineer signature pads
var engineerSignaturePad1 = initializeSignaturePad("engineer-signature-pad-1", "clear-engineer-signature-1");
var engineerSignaturePad2 = initializeSignaturePad("engineer-signature-pad-2", "clear-engineer-signature-2");

// Customer signature pads
var customerSignaturePad1 = initializeSignaturePad("customer-signature-pad-1", "clear-customer-signature-1");
var customerSignaturePad2 = initializeSignaturePad("customer-signature-pad-2", "clear-customer-signature-2");
