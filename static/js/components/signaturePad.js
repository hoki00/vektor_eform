// Signature pad function
export function initializeSignaturePad(canvasId, clearButtonId) {
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