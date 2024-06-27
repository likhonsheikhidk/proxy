document.addEventListener('DOMContentLoaded', function() {
    fetch('api.php')
    .then(response => response.json())
    .then(data => {
        const listElement = document.getElementById('proxyList');
        listElement.innerHTML = ''; // Clear current content
        data.forEach(proxy => {
            const item = document.createElement('div');
            item.textContent = `${proxy.ip}:${proxy.port}`;
            if (proxy.country) {
                const flagImg = document.createElement('img');
                flagImg.src = proxy.flag;
                flagImg.alt = `${proxy.country} flag`;
                item.appendChild(flagImg);
                item.appendChild(document.createTextNode(` ${proxy.country}`));
            }
            listElement.appendChild(item);
        });
    })
    .catch(error => {
        document.getElementById('proxyList').innerText = 'Error loading proxies.';
    });
});
