var init = function(options) {
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
    options[0].selected = true;
};
setTimeout(function(){
    var dropdown = document.getElementById('moment-detailed-serialNumber');
    if(dropdown !== null) {
        init(dropdown.options);
    }
}, 3000);