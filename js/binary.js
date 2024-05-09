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
        page1.style.transform = 'translateX(0px)';
        page2.style.transform = 'translateX(-400px)';
        page3.style.transform = 'translateX(-400px)';
        page4.style.transform = 'translateX(-400px)';
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
menu[0].click();
menu[1].addEventListener('click', () => {
        page1.style.opacity = '0';
        page3.style.opacity = '0';
        page4.style.opacity = '0';
        page2.style.opacity = '1';
        page2.style.transform = 'translate(0px,-380px)'
        page1.style.transform = 'translateX(-400px)';
        page3.style.transform = 'translateX(-400px)';
        page4.style.transform = 'translateX(-400px)';
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
        page1.style.transform = 'translateX(-400px)';
        page2.style.transform = 'translate(-400px,-400px)';
        page3.style.transform = 'translate(0px,-610px)'
        page4.style.transform = 'translateX(-400px)';
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
        page1.style.transform = 'translateX(-400px)';
        page2.style.transform = 'translate(-400px,-400px)';
        page3.style.transform = 'translate(-400px,-400px)';
        page4.style.transform = 'translate(0px ,-850px)';
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
        let valid = true;
        for (let i = 0; i < inputvalue.length; i++) {
                if (inputvalue[i] !== "0" && inputvalue[i] !== "1") {
                        valid = false;
                        break;
                }
        }
        if (!valid) {
                inp.classList.add('red');
        } else {
                inp.classList.remove('red');
        }

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
function input2() {
        let Decimal = document.getElementById('fourth');
        let Octal = document.getElementById('fifth');
        let Hexa = document.getElementById('sixth');
        let inputvalue = inp.value.trim();
        let Decimalvalue = parseInt(inputvalue, 8);
        Decimal.value = Decimalvalue;
        Octal.value = Decimalvalue.toString(2);
        Hexa.value = Decimalvalue.toString(16).toUpperCase();
        let valid = true;
        for (let i = 0; i < inputvalue.length; i++) {
                if (inputvalue[i] !== "0" && inputvalue[i] !== "1" && inputvalue[i] !== "2" && inputvalue[i] !== "3" && inputvalue[i] !== "4" && inputvalue[i] !== "5" && inputvalue[i] !== "6" && inputvalue[i] !== "7") {
                        valid = false;
                        break;
                }
        }
        if (!valid) {
                inp.classList.add('red');

        } else {
                inp.classList.remove('red');

        }

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
        let valid = true;
        for (let i = 0; i < inputvalue.length; i++) {
                if (inputvalue[i] !== "0" && inputvalue[i] !== "1" && inputvalue[i] !== "2" && inputvalue[i] !== "3" && inputvalue[i] !== "4" && inputvalue[i] !== "5" && inputvalue[i] !== "6" && inputvalue[i] !== "7" && inputvalue[i] !== "8" && inputvalue[i] !== "9" && inputvalue[i] !== "A" && inputvalue[i] !== "B" && inputvalue[i] !== "C" && inputvalue[i] !== "D" && inputvalue[i] !== "E" && inputvalue[i] !== "F"&& inputvalue[i] !== "a"&& inputvalue[i] !== "b"&& inputvalue[i] !== "c"&& inputvalue[i] !== "d"&& inputvalue[i] !== "e"&& inputvalue[i] !== "f") {
                        valid = false;
                        break;
                }
        }
        if (!valid) {
                inp.classList.add('red');

        } else {
                inp.classList.remove('red');

        }
}
function input4() {
        let Binary = document.getElementById('tenth');
        let Octal = document.getElementById('eleventh');
        let Hexa = document.getElementById('twelveth');
        let inputValue = parseInt(inp.value.trim());
        Binary.value = inputValue.toString(2);
        Octal.value = inputValue.toString(8);
        Hexa.value = inputValue.toString(16).toUpperCase();
        let valid = true;
        for (let i = 0; i < inputValue.length; i++) {
                if (inputValue[i] !== "0" && inputValue[i] !== "1" && inputValue[i] !== "2" && inputValue[i] !== "3" && inputValue[i] !== "4" && inputValue[i] !== "5" && inputValue[i] !== "6" && inputValue[i] !== "7" && inputValue[i] !== "8" && inputValue[i] !== "9") {
                        valid = false;
                        break;
                }
        }
        if (!valid) {
                inp.classList.add('red');

        } else {
                inp.classList.remove('red');

        }
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
        inputs[0].type = 'number';
        inputs[1].type = 'number';
        result.type = 'number';
        menu[4].style.color = 'white';
        menu[5].style.color = 'grey';
        menu[6].style.color = 'grey';
        inputs[0].value = ""
        inputs[1].value = ""
        result.value = ""
        inputs[0].addEventListener('input',()=>{
                let valid = true;
                let d=inputs[0].value;
                for (let i = 0; i < d.length; i++) {
                        if (d[i] !== "0" && d[i] !== "1") {
                                valid = false;
                                break;
                        }
                }
                if (!valid) {
                        inputs[0].classList.add('red');
                } else {
                        inputs[0].classList.remove('red');
                }
        });
        inputs[1].addEventListener('input',()=>{
                let valid = true;
                let d=inputs[1].value;
                for (let i = 0; i < d.length; i++) {
                        if (d[i] !== "0" && d[i] !== "1") {
                                valid = false;
                                break;
                        }
                }
                if (!valid) {
                        inputs[1].classList.add('red');
                } else {
                        inputs[1].classList.remove('red');
                }
        });
        buttons[0].addEventListener('click', () => {
                if (inputs[0].value == "" || inputs[1].value == "") {
                        alert(" Kindly Input All Required Values.");
                }
                let a = parseInt(inputs[0].value, 2);
                let b = parseInt(inputs[1].value, 2);
                let c = a + b;
                result.value = c.toString(2);

        });
        buttons[1].addEventListener('click', () => {
                if (inputs[0].value == "" || inputs[1].value == "") {
                        alert(" Kindly Input All Required Values.");
                }
                let a = parseInt(inputs[0].value, 2);
                let b = parseInt(inputs[1].value, 2);
                let c = a - b;
                result.value = c.toString(2);

        });
        buttons[2].addEventListener('click', () => {
                if (inputs[0].value == "" || inputs[1].value == "") {
                        alert(" Kindly Input All Required Values.");
                }
                let a = parseInt(inputs[0].value, 2);
                let b = parseInt(inputs[1].value, 2);
                let c = a * b;
                result.value = c.toString(2);

        });
});
menu[4].click();

menu[5].addEventListener('click', () => {
        inputs[0].type = 'number';
        inputs[1].type = 'number';
        result.type = 'number';
        inputs[0].value = ""
        inputs[1].value = ""
        result.value = ""
        menu[4].style.color = 'grey';
        menu[5].style.color = 'white';
        menu[6].style.color = 'grey';
        inputs[0].addEventListener('input',()=>{
                let valid = true;
                let d=inputs[0].value;
                for (let i = 0; i < d.length; i++) {
                        if (d[i] !== "0" && d[i] !== "1" && d[i] !== "2" && d[i] !== "3" && d[i] !== "4" && d[i] !== "5" && d[i] !== "6" && d[i] !== "7") {
                                valid = false;
                                break;
                        }
                }
                if (!valid) {
                        inputs[0].classList.add('red');
                } else {
                        inputs[0].classList.remove('red');
                }
        });
        inputs[1].addEventListener('input',()=>{
                let valid = true;
                let d=inputs[1].value;
                for (let i = 0; i < d.length; i++) {
                        if (d[i] !== "0" && d[i] !== "1" && d[i] !== "2" && d[i] !== "3" && d[i] !== "4" && d[i] !== "5" && d[i] !== "6" && d[i] !== "7") {
                                valid = false;
                                break;
                        }
                }
                if (!valid) {
                        inputs[1].classList.add('red');
                } else {
                        inputs[1].classList.remove('red');
                }
        });

        buttons[0].addEventListener('click', () => {
                if (inputs[0].value == "" || inputs[1].value == "") {
                        alert(" Kindly Input All Required Values.");
                }
                let a = parseInt(inputs[0].value, 8);
                let b = parseInt(inputs[1].value, 8);
                let c = a + b;
                result.value = c.toString(8);

        });
        buttons[1].addEventListener('click', () => {
                if (inputs[0].value == "" || inputs[1].value == "") {
                        alert(" Kindly Input All Required Values.");
                }
                let a = parseInt(inputs[0].value, 8);
                let b = parseInt(inputs[1].value, 8);
                let c = a - b;
                result.value = c.toString(8);

        });
        buttons[2].addEventListener('click', () => {
                if (inputs[0].value == "" || inputs[1].value == "") {
                        alert(" Kindly Input All Required Values.");
                }
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
        inputs[0].value = ""
        inputs[1].value = ""
        result.value = ""

        inputs[0].addEventListener('input',()=>{
                let valid = true;
                let d=inputs[0].value;
                for (let i = 0; i < d.length; i++) {
                        if (d[i] !== "0" && d[i] !== "1" && d[i] !== "2" && d[i] !== "3" && d[i] !== "4" && d[i] !== "5" && d[i] !== "6" && d[i] !== "7" && d[i] !== "8" && d[i] !== "9" && d[i] !== "A" && d[i] !== "B" && d[i] !== "C" && d[i] !== "D" && d[i] !== "E" && d[i] !== "F"&& d[i] !== "a"&& d[i] !== "b"&& d[i] !== "c"&& d[i] !== "d"&& d[i] !== "e"&& d[i] !== "f") {
                                valid = false;
                                break;
                        }
                }
                if (!valid) {
                        inputs[0].classList.add('red');
                } else {
                        inputs[0].classList.remove('red');
                }
        });
        inputs[1].addEventListener('input',()=>{
                let valid = true;
                let d=inputs[1].value;
                for (let i = 0; i < d.length; i++) {
                        if (d[i] !== "0" && d[i] !== "1" && d[i] !== "2" && d[i] !== "3" && d[i] !== "4" && d[i] !== "5" && d[i] !== "6" && d[i] !== "7" && d[i] !== "8" && d[i] !== "9" && d[i] !== "A" && d[i] !== "B" && d[i] !== "C" && d[i] !== "D" && d[i] !== "E" && d[i] !== "F"&& d[i] !== "a"&& d[i] !== "b"&& d[i] !== "c"&& d[i] !== "d"&& d[i] !== "e"&& d[i] !== "f") {
                                valid = false;
                                break;
                        }
                }
                if (!valid) {
                        inputs[1].classList.add('red');
                } else {
                        inputs[1].classList.remove('red');
                }
        });

        buttons[0].addEventListener('click', () => {
                if (inputs[0].value == "" || inputs[1].value == "") {
                        alert(" Kindly Input All Required Values.");
                }
                let a = parseInt(inputs[0].value, 16);
                let b = parseInt(inputs[1].value, 16);
                let c = a + b;
                result.value = c.toString(16).toUpperCase();

        });
        buttons[1].addEventListener('click', () => {
                if (inputs[0].value == "" || inputs[1].value == "") {
                        alert(" Kindly Input All Required Values.");
                }
                let a = parseInt(inputs[0].value, 16);
                let b = parseInt(inputs[1].value, 16);
                let c = a - b;
                result.value = c.toString(16).toUpperCase();

        });
        buttons[2].addEventListener('click', () => {
                if (inputs[0].value == "" || inputs[1].value == "") {
                        alert(" Kindly Input All Required Values.");
                }
                let a = parseInt(inputs[0].value, 16);
                let b = parseInt(inputs[1].value, 16);
                let c = a * b;
                result.value = c.toString(16).toLocaleUpperCase();

        });
});
