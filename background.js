chrome.browserAction.onClicked.addListener(function(tab) { 
    chrome.tabs.executeScript(null, {file: "testScript.js"}); 
});
chrome.webNavigation.onCompleted.addListener(closeTab, {
    url: [
      {urlPrefix: 'https://www.nbatopshot.com/*'}
    ]
  });
  function closeTab(e) {
    if (!e.frameId) {
      chrome.tabs.remove(e.tabId);
    }
  }