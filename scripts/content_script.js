var sortDropdown = function(options) {
    var optionsArray = [];
    for (var i = 0; i < options.length; i++) {
        var optionsText = options[i].innerText;
        if(optionsText.includes('$')) {
            options[i].price = optionsText.split('$')[1];
            optionsArray.push(options[i]);
        }
        else {
            options[i].price = '$0';
            optionsArray.push(options[i]);        
        }
    }
    optionsArray = optionsArray.sort(function (a, b) {           
        if (parseInt(a.price.replace(/,/g, '')) === parseInt(b.price.replace(/,/g, ''))) {
            return 0;
        }
        else {
            return (parseInt(a.price.replace(/,/g, '')) < parseInt(b.price.replace(/,/g, ''))) ? -1 : 1;
        }   
    });

    for (var i = 0; i <= options.length; i++) {            
        options[i] = optionsArray[i];
    }
    options[0].selected = true;
};
var colorChanges = function(options, colors, toggles) {
    for (var i = 0; i < options.length; i++) {
        var digit = options[i].value.length;
        if (digit === 1) {
            options[i].classList.add('one-digit');
        }
        else if (digit === 2) {
            options[i].classList.add('two-digit');
        }
        else if (digit === 3) {
            options[i].classList.add('three-digit');
        }
        else if (digit === 4) {
            options[i].classList.add('four-digit');
        }
    }
    var dynamicStyles = '';
    if(toggles[0] === true) {
        dynamicStyles += '.one-digit {color:'+colors[0]+' !important}';
    }
    if(toggles[1] === true) {
        dynamicStyles += '.two-digit {color:'+colors[1]+' !important}';
    }
    if(toggles[2] === true) {
        dynamicStyles += '.three-digit {color:'+colors[2]+' !important}';
    }
    if(toggles[3] === true) {
        dynamicStyles += '.four-digit {color:'+colors[3]+' !important}';
    }
    if(document.getElementById('helperStyles')) {
        this.innerHTML = dynamicStyles;
    }
    else {
        var newStyle = document.createElement('style');
        newStyle.id = "helperStyles";
        document.querySelector('head').append(newStyle);
        newStyle.innerHTML = dynamicStyles;
    }
}
chrome.storage.sync.get(['oneDigitColor', 'twoDigitColor', 'threeDigitColor', 'fourDigitColor', 'toggle', 'toggle1', 'toggle2', 'toggle3', 'toggle4'], function(items) {
    var color1 = items['oneDigitColor'];
    var color2 = items['twoDigitColor'];
    var color3 = items['threeDigitColor'];
    var color4 = items['fourDigitColor'];
    var colorArray = [];
    var toggle = items['toggle'];
    var toggle1 = items['toggle1'];
    var toggle2 = items['toggle2'];
    var toggle3 = items['toggle3'];
    var toggle4 = items['toggle4'];
    var toggleArray = [];
    var dropdown = document.getElementById('moment-detailed-serialNumber');
    toggleArray.push(toggle1, toggle2, toggle3, toggle4);
    colorArray.push(color1, color2, color3, color4);
    if(dropdown !== null) { 
        if (toggle === true) {
            sortDropdown(dropdown.options);
        }
        colorChanges(dropdown, colorArray, toggleArray);
    }
});