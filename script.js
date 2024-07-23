let lastClickedPoint = null;

document.querySelectorAll('.point').forEach(point => {
    point.addEventListener('click', function() {
        // Remove the highlight from the last clicked point
        if (lastClickedPoint) {
            lastClickedPoint.classList.remove('highlighted');
        }

        // Highlight the clicked point
        this.classList.add('highlighted');
        
        // Update the info text
        const infoText = this.getAttribute('data-info');
        document.getElementById('info').innerText = infoText;

        // Store the current clicked point
        lastClickedPoint = this;
    });
});
