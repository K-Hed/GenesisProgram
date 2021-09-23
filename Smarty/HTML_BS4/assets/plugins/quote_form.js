const init = function() {
    document.getElementById("alert_success").addEventListener('click', reset);
    document.getElementById("alert_mandatory").addEventListener('click', reset);
}

const send = function(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    let ret = validate();
    if (ret) {
        document.getElementById('form_user').submit();
    } else {
        let err = document.querySelector('.error');
        let input = err.querySelector('input');
        err.setAttribute('data-errormsg', `Missing ${input.placeholder}`);
    }
}

const validate = function(ev) {
    let valid = false;
    let check = document.getElementByValue('Residential');
}

function get_building_type(building_type) {
    if (building_type === "Residential") {
        
    }
}

document.addEventListener('DOMContentLoaded', init);