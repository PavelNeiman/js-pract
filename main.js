// alert( "Привет" );


var bodyColor = document.querySelector('div');

// btn's
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var multiply = document.querySelector('#multiply');
var division = document.querySelector('#division');
var resBlock = document.querySelector('#result');

// numbers
var firstNum = document.querySelector('#firstNum');
var secondNum = document.querySelector('#secondNum');


// some functions
bodyColor.onclick = function(){
    bodyColor.style.backgroundColor = 'white';
}


// math functions
plus.onclick = function(){
    var result = parseInt(firstNum.value) + parseInt(secondNum.value);
    resBlock.innerHTML = 'Итого: ' + result;
}

minus.onclick = function(){
    var result = parseInt(firstNum.value) - parseInt(secondNum.value);
    resBlock.innerHTML = 'Итого: ' + result;
}

multiply.onclick = function(){
    var result = parseInt(firstNum.value) * parseInt(secondNum.value);
    resBlock.innerHTML = 'Итого: ' + result;
}

division.onclick = function(){
    var result = parseInt(firstNum.value) / parseInt(secondNum.value);
    resBlock.innerHTML = 'Итого: ' + result;
}

