let number_first = '';
let number_second = '';
let opepation = '';
let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
let input = document.getElementById('input_field');
let history = document.getElementById('history');
let button_add = document.getElementById('add');
let button_subtract = document.getElementById('subtract');
let button_multiply = document.getElementById('multiply');
let button_divide = document.getElementById('divide');
let button_negative = document.getElementById('negative');
let button_equal = document.getElementById('equal');
let button_operations = document.getElementsByClassName('operation');
let button_digits = document.getElementsByClassName('digit');

button_negative.addEventListener('click',negative);
button_add.addEventListener('click',add);
button_subtract.addEventListener('click',subtract);
button_multiply.addEventListener('click',multiply);
button_divide.addEventListener('click',divide);
button_equal.addEventListener('click',equal);

for (let item of button_digits){
    item.addEventListener('click', function (item){
        press_digit()
    });
}

document.addEventListener('keydown', function (event){
    console.log('key:'+event.key+' code:'+event.code);
    if ( digits.indexOf(event.key) != -1 ){
        press_digit(event);
    } else if(event.key == 'Backspace'){
        erase();
    } else if (event.key == '+'){
        add();
    } else if(event.key == '-'){
        subtract();
    } else if(event.key == '*'){
        multiply();
    } else if(event.key == '/'){
        divide();
    } else if (event.key == 'Enter' || event.key == '='){
        equal();
    }
});

function press_digit(event){
    input.value += event.key;
    if(opepation == '='){
        input.value = '';
        history.value = '';
    }
    history.value += event.key;
}

function erase(){
    if(input.value.length >0 ){
        input.value = input.value.substr(0, input.value.length-1);
    }
}

function add(){
    opepation = '+';
    number_first = Number(input.value);
    input.value = '';
    history.value = number_first + ' + ';
    unpress_buttons();
    button_add.style.backgroundColor = 'antiquewhite'
}
function subtract(){
    opepation = '-';
    number_first = Number(input.value);
    input.value = '';
    history.value = number_first + ' - ';
    unpress_buttons();
    button_subtract.style.backgroundColor = 'antiquewhite'
}
function multiply(){
    opepation = '*';
    number_first = Number(input.value);
    input.value = '';
    history.value = number_first + ' * ';
    unpress_buttons();
    button_multiply.style.backgroundColor = 'antiquewhite'
}
function divide(){
    opepation = '/';
    number_first = Number(input.value);
    input.value = '';
    history.value = number_first + ' / ';
    unpress_buttons();
    button_divide.style.backgroundColor = 'antiquewhite'
}
function negative(){
    if(opepation == '=' || opepation == ''){
        input.value = Number(input.value) * -1;
        number_first = Number(input.value);
    }
    else
    {
        input.value = Number(input.value) * -1;
        number_second = input.value;
    }
    console.log(number_first+' '+number_second);
    button_equal.focus();
}
function equal(){
    switch (opepation){
        case '+':
            number_second = Number(input.value);
            input.value = number_first + number_second;
            history.value += ' = ' + input.value;
            break;
        case '-':
            number_second = Number(input.value);
            input.value = number_first - number_second;
            history.value += ' = ' + input.value;
            break;
        case '*':
            number_second = Number(input.value);
            input.value = number_first * number_second;
            history.value += ' = ' + input.value;
            break;
        case '/':
            number_second = Number(input.value);
            input.value = number_first / number_second;
            history.value += ' = ' + input.value;
            break;
    }
    opepation = '=';
    number_first = Number(input.value);
    number_second = '';
    unpress_buttons();
    button_equal.style.backgroundColor = 'antiquewhite'
}
function unpress_buttons(){
    for (let item of button_operations){
        item.style.backgroundColor = 'whitesmoke';
    }
}