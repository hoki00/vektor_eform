document.addEventListener('DOMContentLoaded', function() {
    const pages = [
        document.getElementById('project-checklist-form-page-1'),
        document.getElementById('project-checklist-form-page-2'),
        document.getElementById('project-checklist-form-page-3'),
        document.getElementById('project-checklist-form-page-4')
    ];
    
    const nextButton = document.getElementById('project-checklist-form-next-button');
    const prevButton = document.getElementById('project-checklist-form-prev-button');
    
    let currentPage = 0;
    
    // Show page function
    function showPage(pageIndex) {
        // Hide all pages
        pages.forEach((page, index) => {
            page.style.display = (index === pageIndex) ? 'block' : 'none';
        });
    
        // Show or hide buttons based on the current page
        prevButton.style.display = (pageIndex === 0) ? 'none' : 'block';
        nextButton.style.display = (pageIndex === pages.length - 1) ? 'none' : 'block';
         
        if(pageIndex == 3) {
            // Dynamically import the signaturePad.js module
            import('/static/js/components/signaturePad.js').then(({ initializeSignaturePad }) => {
                // Initialize Engineer signature pad
                initializeSignaturePad("engineer-signature-pad", "clear-engineer-signature");
                // Initialize Customer signature pads
                initializeSignaturePad("customer-signature-pad-1", "clear-customer-signature-1");
                initializeSignaturePad("customer-signature-pad-2", "clear-customer-signature-2");
            }).catch(error => {
                console.error("Error loading signaturePad.js:", error);
            });
        }
    }
    
    // Next button
    nextButton.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });
    
    // Previous button
    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });
    
    showPage(currentPage);

    // Create new row (battery priority check)
    document.getElementById('add-new-battery-polarity-check').addEventListener('click', function() {
        const newRow = document.createElement('div');
        newRow.classList.add('grid', 'col-span-4', 'grid-cols-4', 'border-none');
    
        // Create the new row with unique Ids
        const timestamp = new Date().getTime();
        newRow.innerHTML = `
            <input type="number" class="table-custom-input" name="stringNumber${timestamp}" id="stringNumber${timestamp}" placeholder="0">
            <input type="number" class="table-custom-input" name="positiveVoltage${timestamp}" id="positiveVoltage${timestamp}" placeholder="0">
            <input type="number" class="table-custom-input" name="negativeVoltage${timestamp}" id="negativeVoltage${timestamp}" placeholder="0">
            <div class="flex justify-around px-2 items-center">
                <img src="/static/images/Delete.png" alt="delete" class="h-[20px]" onclick="removeRow(this)">
            </div>
        `;

        // Append the new row as a child of the battery-polarity-check-table
        const materialPanel = document.getElementById('battery-polarity-check-table');
        materialPanel.appendChild(newRow);
    });
    
    // Create new row (battery priority check)
    document.getElementById('add-new-ups-function-test-battery').addEventListener('click', function() {
        const newRow = document.createElement('div');
        newRow.classList.add('grid', 'col-span-5', 'grid-cols-5', 'border-none');
    
        // Create the new row with unique Ids
        const timestamp = new Date().getTime();
        newRow.innerHTML = `
            <input type="number" class="table-custom-input" id="string${timestamp}" name="string${timestamp}" placeholder="0">
            <input type="number" class="table-custom-input" id="voltage1Input${timestamp}" name="voltage1Input${timestamp}" placeholder="0">
            <input type="number" class="table-custom-input" id="voltage2Input${timestamp}" name="voltage2Input${timestamp}" placeholder="0">
            <input type="number" class="table-custom-input" id="current${timestamp}" name="current${timestamp}" placeholder="0">
            <div class="flex justify-around px-2 items-center">
                <img src="/static/images/Delete.png" alt="delete" class="h-[20px]" onclick="removeRow(this)">
            </div>
        `;

        // Append the new row as a child of the ups-function-test-battery-table
        const materialPanel = document.getElementById('ups-function-test-battery-table');
        materialPanel.appendChild(newRow);
    });   
});
