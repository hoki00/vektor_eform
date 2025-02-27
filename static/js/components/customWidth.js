export function customWidth(activePageElementId) {
    var selectedActiveForm = document.getElementById(activePageElementId);

    var windowWidth = window.innerWidth;
    var customCalculationGap = 0;
    if (windowWidth >= 1440) {
        customCalculationGap = 64;
    } else if (windowWidth >= 1024 && windowWidth < 1440 ) {
        customCalculationGap = 32;
    } else {
        customCalculationGap = 16;
    }

    var customCalculationInputWidth = (selectedActiveForm.offsetWidth - 100 - (customCalculationGap * 3)) / 4

    let customInputWidthElements = document.querySelectorAll('.custom-input-width');
    customInputWidthElements.forEach(function(element) {
        element.width = customCalculationInputWidth;
    });

    let customInputRowElements = document.querySelectorAll('.custom-input-row');
    customInputRowElements.forEach(function(element) {
        element.style.gap = customCalculationGap + 'px';
    });

}
