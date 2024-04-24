let page1 = document.querySelector('.input1');
let inp = document.getElementById('Input');

let page2 = document.querySelector('.input2');
let page3 = document.querySelector('.input3');
let page4 = document.querySelector('.input4');

let menu = document.querySelectorAll('.boxes');
// ==========>Animations for changing Pages<===========
menu[0].addEventListener('click', () => {
        page2.style.opacity = '0';
        page3.style.opacity = '0';
        page4.style.opacity = '0';
        page1.style.opacity = '1';
        page1.style.transform = 'translateY(0px)';
        menu[0].style.color = 'white';
        menu[1].style.color = 'grey';
        menu[2].style.color = 'grey';
        menu[3].style.color = 'grey';
        inp.type = 'number';
        inp.addEventListener('input', input1);
        document.getElementById('first').value = "";
        document.getElementById('second').value = "";
        document.getElementById('third').value = "";
        document.getElementById('One').value = "";
        document.getElementById('Two').value = "";
        inp.value = "";

});

menu[1].addEventListener('click', () => {
        page1.style.opacity = '0';
        page3.style.opacity = '0';
        page4.style.opacity = '0';
        page2.style.opacity = '1';
        page2.style.transform = 'translateY(-845px)';
        page1.style.transform = 'translateY(400px)';
        page3.style.transform = 'translateY(400px)';
        page4.style.transform = 'translateY(400px)';
        menu[0].style.color = 'grey';
        menu[1].style.color = 'white';
        menu[2].style.color = 'grey';
        menu[3].style.color = 'grey';
        inp.type = 'number';
        inp.addEventListener('input', input2)
        document.getElementById('fourth').value = "";
        document.getElementById('fifth').value = "";
        document.getElementById('sixth').value = "";
        inp.value = "";

});
menu[2].addEventListener('click', () => {
        page1.style.opacity = '0';
        page2.style.opacity = '0';
        page4.style.opacity = '0';
        page3.style.transform = 'translateY(-1100px)';
        page1.style.transform = 'translateY(400px)';
        page2.style.transform = 'translateY(400px)';
        page4.style.transform = 'translateY(400px)';
        page3.style.opacity = '1';
        menu[0].style.color = 'grey';
        menu[1].style.color = 'grey';
        menu[2].style.color = 'white';
        menu[3].style.color = 'grey';
        inp.type = 'text';
        inp.addEventListener('input', input3)
        document.getElementById('seventh').value = "";
        document.getElementById('eighth').value = "";
        document.getElementById('ninth').value = "";
        inp.value = "";

});
menu[3].addEventListener('click', () => {
        page1.style.opacity = '0';
        page2.style.opacity = '0';
        page3.style.opacity = '0';
        page1.style.transform = 'translateY(400px)';
        page2.style.transform = 'translateY(400px)';
        page3.style.transform = 'translateY(400px)';
        page4.style.transform = 'translateY(-1320px)';
        page4.style.opacity = '1';
        menu[0].style.color = 'grey';
        menu[1].style.color = 'grey';
        menu[2].style.color = 'grey';
        menu[3].style.color = 'white';
        inp.type = 'number';
        document.getElementById('tenth').value = "";
        document.getElementById('eleventh').value = "";
        document.getElementById('twelveth').value = "";
        inp.value = "";
        inp.addEventListener('input', input4)

});

// ==========> Functions for Calculations <===========

function input1() {
        let Decimal = document.getElementById('first');
        let Octal = document.getElementById('second');
        let Hexa = document.getElementById('third');
        let inputvalue = inp.value.trim();
        let Decimalvalue = parseInt(inputvalue, 2);
        Decimal.value = Decimalvalue;
        Octal.value = Decimalvalue.toString(8);
        Hexa.value = Decimalvalue.toString(16).toUpperCase();

        // ==========> Complements Conversion <===========

        let one = document.getElementById('One');
        let a = inp.value;
        let result = '';
        for (let i = 0; i < a.length; i++) {
                if (a[i] == 1) {
                        result += '0';
                }
                else if (a[i] == 0) {
                        result += '1';

                }
        }
        one.value = result;
        let Two = document.getElementById('Two');
        if (inp != "") {

                let b = parseInt(result, 2);
                b++;
                Two.value = b.toString(2);

        }
}

inp.addEventListener('input', input1)

function input2() {
        let Decimal = document.getElementById('fourth');
        let Octal = document.getElementById('fifth');
        let Hexa = document.getElementById('sixth');
        let inputvalue = inp.value.trim();
        let Decimalvalue = parseInt(inputvalue, 8);
        Decimal.value = Decimalvalue;
        Octal.value = Decimalvalue.toString(2);
        Hexa.value = Decimalvalue.toString(16).toUpperCase();

}
function input3() {
        let Decimal = document.getElementById('seventh');
        let Octal = document.getElementById('eighth');
        let Hexa = document.getElementById('ninth');
        let inputvalue = inp.value.trim();
        let Decimalvalue = parseInt(inputvalue, 16);
        Decimal.value = Decimalvalue;
        Octal.value = Decimalvalue.toString(2);
        Hexa.value = Decimalvalue.toString(8);
}
function input4() {
        let Binary = document.getElementById('tenth');
        let Octal = document.getElementById('eleventh');
        let Hexa = document.getElementById('twelveth');
        let inputValue = parseInt(inp.value.trim());
        Binary.value = inputValue.toString(2);
        Octal.value = inputValue.toString(8);
        Hexa.value = inputValue.toString(16).toUpperCase();

}

// =================>Themes<==============
let theme = document.querySelector('.theme');
const body = document.querySelector('body');
theme.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
});

// =================>Airthmetic Operations<==============

let buttons = document.querySelectorAll('.btns');
let inputs = document.getElementsByClassName('op');
let result = document.getElementById('result');

menu[4].addEventListener('click', () => {
        menu[4].style.color = 'white';
        menu[5].style.color = 'grey';
        menu[6].style.color = 'grey';
        inputs[0].value=""
        inputs[1].value=""
        result.value=""
        buttons[0].addEventListener('click', () => {
                let a = parseInt(inputs[0].value, 2);
                let b = parseInt(inputs[1].value, 2);
                let c = a + b;
                result.value = c.toString(2);

        });
        buttons[1].addEventListener('click', () => {
                let a = parseInt(inputs[0].value, 2);
                let b = parseInt(inputs[1].value, 2);
                let c = a - b;
                result.value = c.toString(2);

        });
        buttons[2].addEventListener('click', () => {
                let a = parseInt(inputs[0].value, 2);
                let b = parseInt(inputs[1].value, 2);
                let c = a * b;
                result.value = c.toString(2);

        });
});
menu[4].click();

menu[5].addEventListener('click', () => {
        inputs[0].value=""
        inputs[1].value=""
        result.value=""
        menu[4].style.color = 'grey';
        menu[5].style.color = 'white';
        menu[6].style.color = 'grey';
        buttons[0].addEventListener('click', () => {
                let a = parseInt(inputs[0].value, 8);
                let b = parseInt(inputs[1].value, 8);
                let c = a + b;
                result.value = c.toString(8);

        });
        buttons[1].addEventListener('click', () => {
                let a = parseInt(inputs[0].value, 8);
                let b = parseInt(inputs[1].value, 8);
                let c = a - b;
                result.value = c.toString(8);

        });
        buttons[2].addEventListener('click', () => {
                let a = parseInt(inputs[0].value, 8);
                let b = parseInt(inputs[1].value, 8);
                let c = a * b;
                result.value = c.toString(8);

        });
});
menu[6].addEventListener('click', () => {
        inputs[0].type = 'text';
        inputs[1].type = 'text';
        result.type = 'text';
        menu[4].style.color = 'grey';
        menu[5].style.color = 'grey';
        menu[6].style.color = 'white';
        inputs[0].value=""
        inputs[1].value=""
        result.value=""
        buttons[0].addEventListener('click', () => {
                let a = parseInt(inputs[0].value, 16);
                let b = parseInt(inputs[1].value, 16);
                let c = a + b;
                result.value = c.toString(16).toUpperCase();

        });
        buttons[1].addEventListener('click', () => {
                let a = parseInt(inputs[0].value, 16);
                let b = parseInt(inputs[1].value, 16);
                let c = a - b;
                result.value = c.toString(16).toUpperCase();

        });
        buttons[2].addEventListener('click', () => {
                let a = parseInt(inputs[0].value, 16);
                let b = parseInt(inputs[1].value, 16);
                let c = a * b;
                result.value = c.toString(16).toLocaleUpperCase();

        });
});