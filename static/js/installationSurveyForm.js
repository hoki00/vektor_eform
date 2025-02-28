document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('installation-survey-form-next-button').addEventListener('click', function() {
        document.getElementById('installation-survey-form-page-1').style.display = "none";
        document.getElementById('installation-survey-form-page-2').style.display = "block";
        document.getElementById('installation-survey-form-next-button').style.display = "none";
        document.getElementById('installation-survey-form-prev-button').style.display = "block";

        // Dynamically import the signaturePad.js module
        import('/static/js/components/signaturePad.js').then(({ initializeSignaturePad }) => {
            // Initialize Engineer signature pads
            initializeSignaturePad("engineer-signature-pad-1", "clear-engineer-signature-1");
            initializeSignaturePad("engineer-signature-pad-2", "clear-engineer-signature-2");
            // Initialize Customer signature pads
            initializeSignaturePad("customer-signature-pad-1", "clear-customer-signature-1");
            initializeSignaturePad("customer-signature-pad-2", "clear-customer-signature-2");
        }).catch(error => {
            console.error("Error loading signaturePad.js:", error);
        });
    });

    document.getElementById('installation-survey-form-prev-button').addEventListener('click', function() {
        document.getElementById('installation-survey-form-page-1').style.display = "block";
        document.getElementById('installation-survey-form-page-2').style.display = "none";
        document.getElementById('installation-survey-form-next-button').style.display = "block";
        document.getElementById('installation-survey-form-prev-button').style.display = "none";
    });

    // Create new row (Product Information Table)
    document.getElementById('add-new-product-information').addEventListener('click', function() {
        const newRow = document.createElement('div');
        newRow.classList.add('grid', 'grid-cols-5', 'border-none');
    
        // Create the new row with unique Ids
        const timestamp = new Date().getTime();
        newRow.innerHTML = `
            <input type="text" class="table-custom-input" name="product${timestamp}" id="product${timestamp}" placeholder="product name">
            <input type="text" class="table-custom-input" name="typr${timestamp}" id="typr${timestamp}" placeholder="type">
            <input type="number" class="table-custom-input" name="capacity${timestamp}" id="capacity${timestamp}" placeholder="0">
            <input type="number" class="table-custom-input" name="quantity${timestamp}" id="string1-voltage${timestamp}" placeholder="0">
            <div class="flex justify-around px-2 items-center">
                <img src="/static/images/Delete.png" alt="delete" class="h-[20px]" onclick="removeRow(this)">
            </div>
        `;

        // Append the new row as a child of the product-information-table
        const materialPanel = document.getElementById('product-information-table');
        materialPanel.appendChild(newRow);
    });
});