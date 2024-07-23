document.querySelectorAll('.point').forEach(point => {
    point.addEventListener('click', function() {
        const infoText = this.getAttribute('data-info');
        document.getElementById('info').innerText = infoText;
    });
});