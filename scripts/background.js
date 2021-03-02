function listener(tabId, changeInfo, tab) {
  if (tab.url.search("://www.nbatopshot.com/listings/p2p/") > -1){
    chrome.tabs.executeScript(tab.id, {file: 'scripts/content_script.js'});
  }
}
chrome.tabs.onUpdated.addListener(listener);