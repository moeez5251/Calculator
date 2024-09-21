// ==============>Calculator<==============
let main_output = document.getElementById("main");
function output(x) {
    main_output.value += x
}
function reset() {
    main_output.value = "";
}
function calculate() {
    try {
        main_output.value = eval(main_output.value);
    }
    catch (error) {
        main_output.value = "Error";
    }
}
function del() {
    main_output.value = main_output.value.slice(0, -1);
}

function keys(y) {
    const key = y.key;
    const btn = document.querySelector(`button[accesskey="${key}"]`);
    if (btn) {
        btn.click();
    }
    if (key === "Backspace") {
        const deleteButton = document.querySelector(
            `button[accesskey="backspace"]`
        );
        if (deleteButton) {
            deleteButton.click();
        }
    }
    if (key == "Enter") {
        const Equal = document.querySelector(`button[accesskey="="]`);
        if (Equal) {
            Equal.click();
        }
    }
}
document.addEventListener('keydown', keys);

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        document.removeEventListener('keydown', keys);

    }
    else {
        document.addEventListener('keydown', keys);

    }
})


document.querySelector("label").addEventListener("change", () => {
    document.querySelector("html").classList.toggle("dark");
})
