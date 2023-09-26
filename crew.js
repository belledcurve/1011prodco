function showCrew(crewType) {
    // Get all crew information elements by class name
    var crewElements = document.getElementsByClassName('responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12 team-members-container')
    // Hide all crew information elements
    for (var i = 0; i < crewElements.length; i++) {
        crewElements[i].style.display = 'none';
    }

    // Show the crew information element corresponding to the crewType
    var selectedCrew = document.getElementById(crewType);
    if (selectedCrew) {
        selectedCrew.style.display = 'block';
    }
}
