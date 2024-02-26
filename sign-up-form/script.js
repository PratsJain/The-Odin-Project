const pass1 = document.getElementById("pass")
const pass2 = document.getElementById("confirm")

pass1.addEventListener("input", () => {
    const invalid = pass1.value.length === 0 || (pass1.value != pass2.value);
    pass1.className = pass2.className = invalid ? "error" : "no-error";
});

pass2.addEventListener("input", () => {
    const invalid = pass2.value.length === 0 || (pass1.value != pass2.value);
    pass1.className = pass2.className = invalid ? "error" : "no-error";
});