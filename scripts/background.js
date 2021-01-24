function listener(tabId, changeInfo, tab) {
  if (tab.url.search("://www.nbatopshot.com") > -1){
    chrome.tabs.executeScript(tab.id, {file: 'scripts/content_script.js'});
  }
}
chrome.tabs.onUpdated.addListener(listener);
