document.addEventListener('DOMContentLoaded', function() {
    const points = document.querySelectorAll('.point');
    const info = document.getElementById('info');
    const tocItems = document.querySelectorAll('#table-of-contents li');
    const mapContainer = document.getElementById('map-container');
    
    let highlightedPoint = null;
    let highlightedTocItem = null;
    let currentIndex = -1;

    function highlightPointAndToc(point, tocItem) {
        if (highlightedPoint) {
            highlightedPoint.classList.remove('highlighted');
        }
        if (highlightedTocItem) {
            highlightedTocItem.classList.remove('highlighted-toc');
        }
        point.classList.add('highlighted');
        tocItem.classList.add('highlighted-toc');
        highlightedPoint = point;
        highlightedTocItem = tocItem;
        info.textContent = point.getAttribute('data-info');
    }

    function clearHighlights() {
        if (highlightedPoint) {
            highlightedPoint.classList.remove('highlighted');
            highlightedPoint = null;
        }
        if (highlightedTocItem) {
            highlightedTocItem.classList.remove('highlighted-toc');
            highlightedTocItem = null;
        }
        info.textContent = "Click on the table of contents or a point on the map to see details.";
        currentIndex = -1;
    }

    points.forEach(point => {
        point.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents the map click event from firing
            const tocItem = document.querySelector(`#table-of-contents li[data-point="${point.id}"]`);
            highlightPointAndToc(point, tocItem);
            currentIndex = Array.from(tocItems).indexOf(tocItem);
        });
    });

    tocItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents the map click event from firing
            const pointId = item.getAttribute('data-point');
            const point = document.getElementById(pointId);
            highlightPointAndToc(point, item);
            currentIndex = Array.from(tocItems).indexOf(item);
        });
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            if (event.key === 'ArrowUp') {
                currentIndex = (currentIndex - 1 + tocItems.length) % tocItems.length;
            } else if (event.key === 'ArrowDown') {
                currentIndex = (currentIndex + 1) % tocItems.length;
            }
            const item = tocItems[currentIndex];
            const pointId = item.getAttribute('data-point');
            const point = document.getElementById(pointId);
            highlightPointAndToc(point, item);
        }
    });

    mapContainer.addEventListener('click', function(event) {
        if (!event.target.classList.contains('point')) {
            clearHighlights();
        }
    });
});
