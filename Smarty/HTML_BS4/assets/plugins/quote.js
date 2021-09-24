let verbose = 1;
function addOption(selectedElement, text) {

    //const addToDiv = document.getElementsByClassName('row');
    const optionResidential = document.createElement('option');
  //addToDiv.appendChild(optionResidential);
  const optionResidentialText = document.createTextNode(text);
  optionResidential.appendChild(optionResidentialText);
  optionResidential.setAttribute('value', 'option');
  selectedElement.appendChild(optionResidential);
}
  
function validate(sel) {
  const selectedOption = sel.options[sel.selectedIndex].text;
  const body = document.body;
  if (selectedOption === "Residential") {
    console.log(selectedOption);
    //const breakLine = document.createElement('br');
    const selectedResidential = document.createElement('select');
 
    let array = [ "Number of Apartments", "Number of tenants" ];
    for (i = 0; i < 2; ++i) {
      addOption(selectedResidential, array[i]);
    }
    //body.append(breakLine);
    //body.append(breakLine);

    //body.append(selectedResidential);
    //const addToDiv = document.getElementsByClassName('row');
    //console.log(addToDiv);
    //addToDiv.appendChild(selectedResidential);

    const addToDiv = document.getElementById('new_option');
    addToDiv.appendChild(selectedResidential);
  }
}