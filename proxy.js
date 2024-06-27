document.addEventListener('DOMContentLoaded', function() {
    fetch('api.php')
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('proxyList').innerText = 'Failed to load proxies.';
        } else {
            document.getElementById('proxyList').innerText = data.data;
        }
    })
    .catch(error => {
        document.getElementById('proxyList').innerText = 'Error loading proxies.';
    });
});
