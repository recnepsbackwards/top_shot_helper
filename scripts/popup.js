function hello() {
    chrome.tabs.executeScript({
      file: 'settings.js'
    }); 
  }
  
 document.getElementById('clickme').addEventListener('click', hello);