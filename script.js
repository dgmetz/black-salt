document.addEventListener('DOMContentLoaded', function() {
    const points = document.querySelectorAll('.point');
    const info = document.getElementById('info');
    const tocItems = document.querySelectorAll('#table-of-contents li');
    
    let highlightedPoint = null;

    points.forEach(point => {
        point.addEventListener('click', function() {
            if (highlightedPoint) {
                highlightedPoint.classList.remove('highlighted');
            }
            point.classList.add('highlighted');
            highlightedPoint = point;
            info.textContent = point.getAttribute('data-info');
        });
    });

    tocItems.forEach(item => {
        item.addEventListener('click', function() {
            const pointId = item.getAttribute('data-point');
            const point = document.getElementById(pointId);
            if (highlightedPoint) {
                highlightedPoint.classList.remove('highlighted');
            }
            point.classList.add('highlighted');
            highlightedPoint = point;
            info.textContent = point.getAttribute('data-info');
        });
    });
});
