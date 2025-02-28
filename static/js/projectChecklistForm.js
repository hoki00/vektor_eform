document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('project-checklist-form-next-button').addEventListener('click', function() {
        document.getElementById('project-checklist-form-page-1').style.display = "none";
        document.getElementById('project-checklist-form-page-2').style.display = "block";
        document.getElementById('project-checklist-form-next-button').style.display = "none";
        document.getElementById('project-checklist-form-prev-button').style.display = "block";
    });

    document.getElementById('project-checklist-form-prev-button').addEventListener('click', function() {
        document.getElementById('project-checklist-form-page-1').style.display = "block";
        document.getElementById('project-checklist-form-page-2').style.display = "none";
        document.getElementById('project-checklist-form-next-button').style.display = "block";
        document.getElementById('project-checklist-form-prev-button').style.display = "none";
    });
});