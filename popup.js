var enabled = false; //disabled by default
var myButton = document.getElementById('toggle');

chrome.storage.local.get('enabled', function(data) {
    enabled = !!data.enabled;
    myButton.textContent = enabled ? 'Disable' : 'Enable';
});

myButton.addEventListener('click', function() {
    enabled = !enabled;
    myButton.textContent = enabled ? 'Disable' : 'Enable';
    chrome.storage.local.set({enabled:enabled});
});