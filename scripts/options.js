// Saves options to chrome.storage
function save_options() {
  var color1 = document.getElementById('oneDigitColor').value;
  var color2 = document.getElementById('twoDigitColor').value;
  var color3 = document.getElementById('threeDigitColor').value;
  var color4 = document.getElementById('fourDigitColor').value;
  var disabledDropdown1 = document.getElementById('oneDigitColor').disabled;
  var disabledDropdown2 = document.getElementById('twoDigitColor').disabled;
  var disabledDropdown3 = document.getElementById('threeDigitColor').disabled;
  var disabledDropdown4 = document.getElementById('fourDigitColor').disabled;
  var toggleChoice = document.getElementById('toggle').checked;
  var toggleChoice1 = document.getElementById('toggle1').checked;
  var toggleChoice2 = document.getElementById('toggle2').checked;
  var toggleChoice3 = document.getElementById('toggle3').checked;
  var toggleChoice4 = document.getElementById('toggle4').checked;

  chrome.storage.sync.set({
    oneDigitColor: color1,
    twoDigitColor: color2,
    threeDigitColor: color3,
    fourDigitColor: color4,
    disabled1: disabledDropdown1,
    disabled2: disabledDropdown2,
    disabled3: disabledDropdown3,
    disabled4: disabledDropdown4,
    toggle: toggleChoice,
    toggle1: toggleChoice1,
    toggle2: toggleChoice2,
    toggle3: toggleChoice3,
    toggle4: toggleChoice4,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved, please refresh your browser.';
    setTimeout(function() {
      status.textContent = '';
    }, 10000);
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
      fourDigitColor: "green",
      disabled1: true,
      disabled2: true,
      disabled3: true,
      disabled4: true,
      toggle: false,
      toggle1: false,
      toggle2: false,
      toggle3: false,
      toggle4: false
  }, function(items) {
      document.getElementById('oneDigitColor').value = items.oneDigitColor;
      document.getElementById('twoDigitColor').value = items.twoDigitColor;
      document.getElementById('threeDigitColor').value = items.threeDigitColor;
      document.getElementById('fourDigitColor').value = items.fourDigitColor;
      document.getElementById('oneDigitColor').disabled = items.disabled1;
      document.getElementById('twoDigitColor').disabled = items.disabled2;
      document.getElementById('threeDigitColor').disabled = items.disabled3;
      document.getElementById('fourDigitColor').disabled = items.disabled4;
      document.getElementById('toggle').checked = items.toggle;
      document.getElementById('toggle1').checked = items.toggle1;
      document.getElementById('toggle2').checked = items.toggle2;
      document.getElementById('toggle3').checked = items.toggle3;
      document.getElementById('toggle4').checked = items.toggle4;

  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
var dropdownStatus = function(selector) {
  if(document.getElementById(selector).disabled === true) {
    document.getElementById(selector).disabled = false;
  }
  else {
    document.getElementById(selector).disabled = true;
  }
};
document.getElementById('toggle1').addEventListener('click', function() {
  dropdownStatus('oneDigitColor');
});
document.getElementById('toggle2').addEventListener('click', function() {
  dropdownStatus('twoDigitColor');
});
document.getElementById('toggle3').addEventListener('click', function() {
  dropdownStatus('threeDigitColor');
});
document.getElementById('toggle4').addEventListener('click', function() {
  dropdownStatus('fourDigitColor');
});