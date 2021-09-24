let verbose = 1;
function validate(sel) {
    const selectedOption = sel.options[sel.selectedIndex].text;
    const body = document.body;
    //if (verbose) { console.log(selectedOption); }
    if (selectedOption === "Residential") {
        if (verbose) {
            console.log(selectedOption);
        }
        const selectedResidential = document.createElement('select');

        const optionResidential1 = document.createElement('option');
        const optionResidentialText1 = document.createTextNode('Number of Apartments 1');
        optionResidential1.appendChild(optionResidentialText1);
        optionResidential1.setAttribute('value1', 'option value1');
        selectedResidential.appendChild(optionResidential1);

        const optionResidential2 = document.createElement('option');
        const optionResidentialText2 = document.createTextNode('Number of Apartments 2');
        optionResidential2.appendChild(optionResidentialText2);
        optionResidential2.setAttribute('value2', 'option value2');
        selectedResidential.appendChild(optionResidential2);

        body.append(selectedResidential);
    }
}