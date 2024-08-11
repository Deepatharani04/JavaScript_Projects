function addtodisplay(value) {
    document.getElementById('display').value += value;
}
function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function cleardisplay() {
    document.getElementById('display').value = '';
}