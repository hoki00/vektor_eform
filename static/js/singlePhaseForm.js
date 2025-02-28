document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('single-phase-form-next-button').addEventListener('click', function() {
        document.getElementById('single-phase-form-page-1').style.display = "none";
        document.getElementById('single-phase-form-page-2').style.display = "block";
        document.getElementById('single-phase-form-next-button').style.display = "none";
        document.getElementById('single-phase-form-prev-button').style.display = "block";

        // Dynamically import the signaturePad.js module
        import('/static/js/components/signaturePad.js').then(({ initializeSignaturePad }) => {
            // Initialize Engineer signature pads
            initializeSignaturePad("engineer-signature-pad", "clear-engineer-signature");
            // Initialize Customer signature pads
            initializeSignaturePad("customer-signature-pad", "clear-customer-signature");
        }).catch(error => {
            console.error("Error loading signaturePad.js:", error);
        });
    });

    document.getElementById('single-phase-form-prev-button').addEventListener('click', function() {
        document.getElementById('single-phase-form-page-1').style.display = "block";
        document.getElementById('single-phase-form-page-2').style.display = "none";
        document.getElementById('single-phase-form-next-button').style.display = "block";
        document.getElementById('single-phase-form-prev-button').style.display = "none";
    });

    // Create new row (battery measurement result - string 1)
    document.getElementById('add-new-mr-battery-string-1').addEventListener('click', function() {
        const newRow = document.createElement('div');
        newRow.classList.add('grid', 'grid-cols-3', 'border-none');
    
        // Create the new row with unique Ids
        const timestamp = new Date().getTime();
        newRow.innerHTML = `
            <input type="number" class="mr-custom-input" name="string1-noBatt${timestamp}" id="string1-noBatt${timestamp}" placeholder="0">
            <input type="number" class="mr-custom-input" name="string1-voltage${timestamp}" id="string1-voltage${timestamp}" placeholder="0">
            <div class="flex justify-around px-2 items-center">
                <img src="/static/images/Delete.png" alt="delete" class="h-[20px]" onclick="removeRow(this)">
            </div>
        `;

        // Append the new row as a child of the battery-mr-table-string-1
        const materialPanel = document.getElementById('battery-mr-table-string-1');
        materialPanel.appendChild(newRow);
    });

    // Create new row (battery measurement result - string 2)
    document.getElementById('add-new-mr-battery-string-2').addEventListener('click', function() {
        const newRow = document.createElement('div');
        newRow.classList.add('grid', 'grid-cols-3', 'border-none');
    
        // Create the new row with unique Ids
        const timestamp = new Date().getTime();
        newRow.innerHTML = `
            <input type="number" class="mr-custom-input" name="string2-noBatt${timestamp}" id="string2-noBatt${timestamp}" placeholder="0">
            <input type="number" class="mr-custom-input" name="string2-voltage${timestamp}" id="string2-voltage${timestamp}" placeholder="0">
            <div class="flex justify-around px-2 items-center">
                <img src="/static/images/Delete.png" alt="delete" class="h-[20px]" onclick="removeRow(this)">
            </div>
        `;

        // Append the new row as a child of the battery-mr-table-string-2
        const materialPanel = document.getElementById('battery-mr-table-string-2');
        materialPanel.appendChild(newRow);
    });
});