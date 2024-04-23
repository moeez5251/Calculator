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
        document.getElementById('first').value="";
        document.getElementById('second').value="";
        document.getElementById('third').value="";
        inp.value="";
});

menu[1].addEventListener('click', () => {
        page1.style.opacity = '0';
        page3.style.opacity = '0';
        page4.style.opacity = '0';
        page2.style.opacity = '1';
        page2.style.transform = 'translateY(-400px)';
        page1.style.transform = 'translateY(400px)';
        page3.style.transform = 'translateY(400px)';
        page4.style.transform = 'translateY(400px)';
        menu[0].style.color = 'grey';
        menu[1].style.color = 'white';
        menu[2].style.color = 'grey';
        menu[3].style.color = 'grey';
        inp.type = 'number';
        inp.addEventListener('input', input2)
        document.getElementById('fourth').value="";
        document.getElementById('fifth').value="";
        document.getElementById('sixth').value="";
        inp.value="";
        
});
menu[2].addEventListener('click', () => {
        page1.style.opacity = '0';
        page2.style.opacity = '0';
        page4.style.opacity = '0';
        page3.style.transform = 'translateY(-750px)';
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
        document.getElementById('seventh').value="";
        document.getElementById('eighth').value="";
        document.getElementById('ninth').value="";
        inp.value="";

});
menu[3].addEventListener('click', () => {
        page1.style.opacity = '0';
        page2.style.opacity = '0';
        page3.style.opacity = '0';
        page1.style.transform = 'translateY(400px)';
        page2.style.transform = 'translateY(400px)';
        page3.style.transform = 'translateY(400px)';
        page4.style.transform = 'translateY(-1150px)';
        page4.style.opacity = '1';
        menu[0].style.color = 'grey';
        menu[1].style.color = 'grey';
        menu[2].style.color = 'grey';
        menu[3].style.color = 'white';
        inp.type = 'number';
        document.getElementById('tenth').value="";
        document.getElementById('eleventh').value="";
        document.getElementById('twelveth').value="";
        inp.value="";
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
let theme=document.querySelector('.theme');
const body=document.querySelector('body');
theme.addEventListener('click',()=>{
        body.classList.toggle('dark-theme');
});
