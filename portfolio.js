function toggleProjects(projectId) {
    var projects = document.getElementById(projectId);
    if (projects.style.display === "none" || projects.style.display === "") {
        projects.style.display = "block";
    } else {
        projects.style.display = "none";
    }
}
