var init = function(options, c1, c2, c3) {
    var optionsArray = [];
    for (var i = 0; i < options.length; i++) {
        var digit = options[i].value.length;
        if (digit === 1) {
            options[i].classList.add('single-digit');
        }
        else if (digit === 2) {
            options[i].classList.add('double-digit');
        }
        else if (digit === 3) {
            options[i].classList.add('triple-digit');
        }
        options[i].price = options[i].innerText.split('$')[1];
        optionsArray.push(options[i]);
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
    var dynamicStyles = '.single-digit {color:'+c1+' !important} .double-digit {color:'+c2+' !important} .triple-digit {color:'+c3+' !important}';
    if(document.getElementById('sniperStyles')) {
        this.innerHTML = dynamicStyles;
    }
    else {
        var newStyle = document.createElement('style');
        newStyle.id = "sniperStyles";
        document.querySelector('head').append(newStyle);
        newStyle.innerHTML = dynamicStyles;
    }
    options[0].selected = true;
};
chrome.storage.sync.get(['oneDigitColor', 'twoDigitColor', 'threeDigitColor', 'toggle'], function(items) {
    var color1 = items['oneDigitColor'];
    var color2 = items['twoDigitColor'];
    var color3 = items['threeDigitColor'];
    var toggle = items['toggle'];
    if (toggle === true) {
        var dropdown = document.getElementById('moment-detailed-serialNumber');
        if(dropdown !== null) {
            init(dropdown.options, color1, color2, color3);
        }
    }
});