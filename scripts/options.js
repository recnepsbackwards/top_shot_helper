// Saves options to chrome.storage
function save_options() {
    var color1 = document.getElementById('oneDigitColor').value;
    var color2 = document.getElementById('twoDigitColor').value;
    var color3 = document.getElementById('threeDigitColor').value;
    var toggleChoice = document.getElementById('toggle').checked;
    chrome.storage.sync.set({
      oneDigitColor: color1,
      twoDigitColor: color2,
      threeDigitColor: color3,
      toggle: toggleChoice
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 1500);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        oneDigitColor: "magenta",
        twoDigitColor: "red",
        threeDigitColor: "blue",
        toggle: false
    }, function(items) {
        document.getElementById('oneDigitColor').value = items.oneDigitColor;
        document.getElementById('twoDigitColor').value = items.twoDigitColor;
        document.getElementById('threeDigitColor').value = items.threeDigitColor;
        document.getElementById('toggle').checked = items.toggle;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);