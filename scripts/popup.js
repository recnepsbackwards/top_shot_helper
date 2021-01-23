function hello() {
    chrome.tabs.executeScript({
      file: 'settings.js'
    }); 
  }
document.getElementById('toggle').addEventListener('click', hello);