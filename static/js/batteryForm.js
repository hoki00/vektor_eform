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
var engineerSignaturePad = initializeSignaturePad("engineer-signature-pad", "clear-engineer-signature");

// Customer signature pads
var customerSignaturePad = initializeSignaturePad("customer-signature-pad", "clear-customer-signature");

