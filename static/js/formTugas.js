// Create new row (assignment product table)
document.getElementById('add-new-assignment-product').addEventListener('click', function() {
    const newRow = document.createElement('div');
    newRow.classList.add('grid', 'grid-cols-9', 'col-span-9', 'border-none');

    // Create the new row with unique Ids
    const timestamp = new Date().getTime();
    newRow.innerHTML = `
        <input class="col-span-2" type="text" name="productName${timestamp}" id="productName${timestamp}" placeholder="product name">
        <input class="col-span-2" type="text" name="capacity${timestamp}" id="capacity${timestamp}" placeholder="capaccity">
        <input class="col-span-2" type="number" name="quantity${timestamp}" id="quantity${timestamp}" placeholder="quantity">
        <input class="col-span-2" type="number" name="serialNumber${timestamp}" id="serialNumber${timestamp}" placeholder="serial number">
        <div class="flex justify-around px-2 items-center">
            <img src="/static/images/Delete.png" alt="delete" class="h-[20px]" onclick="removeRow(this)">
        </div>
    `;

    // Append the new row as a child of the assignment-product-table
    const assignmentProductTable = document.getElementById('assignment-product-table');
    assignmentProductTable.appendChild(newRow);
});

// Delete the selected row (product name/serial number)
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
var engineerSignaturePad1 = initializeSignaturePad("engineer-signature-pad-1", "clear-engineer-signature-1");
var engineerSignaturePad2 = initializeSignaturePad("engineer-signature-pad-2", "clear-engineer-signature-2");

// Customer signature pads
var customerSignaturePad1 = initializeSignaturePad("customer-signature-pad-1", "clear-customer-signature-1");
var customerSignaturePad2 = initializeSignaturePad("customer-signature-pad-2", "clear-customer-signature-2");
