let residentialIsShown = 0;
let commercialIsShown = 0;
let corporateIsShown = 0;
let hybridIsShown = 0;
let verbose = 1;
let number_of_labels = 0;
let number_of_breaks = 0;
let number_of_inputs = 0;
let number_of_buttons = 0;
let number_of_div_row = 0;
let number_of_div_colmd8 = 0;

function addLabelTag(parent, idText, text) {
  const label = document.createElement('label');
  label.setAttribute("id", idText);
  label.setAttribute("for", "building_select");
  label.innerHTML = "Write the number of " + text + ":";
  var allDivs = document.getElementsByTagName('div');
  for (var i = 0; i < allDivs.length; i++) {
      if (allDivs.item(i).id == "colmd6Id") {
          allDivs.item(i).appendChild(label);
          break;
      }
  }
  //parent.appendChild(label);
  //parent.append(label);
  ++number_of_labels;
}

function addTwoBreakTags(parent, idText) {
  let breakLine1 = document.createElement('br');
  if (idText.length) {
    breakLine1.setAttribute("id", idText);
  }
  parent.appendChild(breakLine1);
  //parent.append(breakLine1);
  ++number_of_breaks;
  //let breakLine2 = document.createElement('br');
  //if (idText.length) {
  //  breakLine2.setAttribute("id", idText);
  //}
  //parent.appendChild(breakLine2);
  //parent.append(breakLine2);
  //++number_of_breaks;
}

function addInputTag(parent, idText) {
    const inputSpace = document.createElement('input');
    inputSpace.setAttribute("type", "number");
    inputSpace.setAttribute("class", "form-control");
    inputSpace.setAttribute("id", idText);
    if (hybridIsShown && idText == "number_hours_activity") {
      inputSpace.setAttribute("max", "24");
    }
    //inputSpace.setAttribute("id", idText);
    //document.querySelector('.col-md-6').getElementById('col-md-6').appendChild(inputSpace);
    //document.querySelector('.col-md-6').appendChild(inputSpace);
    var allDivs = document.getElementsByTagName('div');
    for (var i = 0; i < allDivs.length; i++) {
        if (allDivs.item(i).id == "colmd6Id") {
            allDivs.item(i).appendChild(inputSpace);
        }
    }
/*  
  const inputSpace = document.createElement('input');
  inputSpace.setAttribute("type", "number");
  inputSpace.setAttribute("class", "form-control");
  inputSpace.setAttribute("id", idText);
  if (hybridIsShown && idText == "number_hours_activity") {
    inputSpace.setAttribute("max", "24");
  }
  inputSpace.setAttribute("id", idText);
  //parent.appendChild(inputSpace);
  parent.append(inputSpace);
*/
  ++number_of_inputs;
}

function analyzeAnswers() {
  var allInputs = document.getElementsByTagName("input");
  if (verbose) { console.log("allInputs.length = " + allInputs.length); }
 
  if (hybridIsShown) {
    var inputTag = document.getElementById("number_hours_activity");
    for (var i = 0; i < allInputs.length; i++) {
      if (allInputs.item(i).id == "number_hours_activity") {
        if (verbose) { console.log("value = " + allInputs.item(i).checkValidity()); } 
        //if (!allInputs[i].checkValidity())
          //if (!allInputs[i].checkValidity())
          if (!allInputs.item(i).checkValidity()) {
            alert(allInputs.item(i).validationMessage);
            //document.getElementsByTagName("input").innerHTML = allInputs.item(i).validationMessage;
          }
      }
    }
  }
  if (verbose) {
    console.log("inputTag.length = " + inputTag.length);
    console.log("inputTag = " + inputTag.innerText);
  }
  //console.log("inputTag = " + inputTag);
  //if (!inputTag.checkValidity()) {
  //  alert("error");
  //}
/*
  for (var i = 0; i < element.length; i++) {
    for (var j = 0; j < inputTag.length; j++) {
    }
  }
*/
}

// formId
function addDivClassRow(parent) {
  //var allForms = document.getElementsByTagName('form');
  //var allForms = document.getElementsByClassName("col-md-8 col-sm-8");
  //var allForms = document.getElementById('formId');
  //console.log("allForms.length = " + allForms.length);
  console.log("parent.length = " + parent.length);
/*
  for (var i = 0; i < allForms.length; i++) {
      if (allForms.item(i).id == "formId") {
        var divClassRow = document.createElement('div');
        divClassRow.setAttribute("class", "row");
        divClassRow.setAttribute("id", "rowId");
        allForms.item(i).appendChild(divClassRow);
        break;
      }
  }
*/
    
      var divClassRow = document.createElement('div');
      divClassRow.setAttribute("class", "row");
      divClassRow.setAttribute("id", "rowId");
      parent.append(divClassRow);
      //break;
    

  //parent.appendChild(inputSpace);
  //parent.appendChild(divClassRow);
  ++number_of_div_row;
}


function addDivClassColMD6(parent) {
  const divClassMD6 = document.createElement('div');
  //divClassMD8.setAttribute("class", "col-md8 col-sm8");
  divClassMD6.setAttribute("class", "col-md-6");
  divClassMD6.setAttribute("id", "colmd6Id");
  var allDivs = document.getElementsByTagName('div');
  for (var i = 0; i < allDivs.length; i++) {
      if (allDivs.item(i).id == "row") {
          allDivs.item(i).appendChild(divClassMD6);
      }
  }

  //parent.append(divClassMD8);

  //parent.appendChild(inputSpace);
  //parent.appendChild(divClassMD8);
  ++number_of_div_colmd8;
}

function addButtonTag(parent, idText) {
  const submitButton = document.createElement('button');
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", idText);
  submitButton.setAttribute("class", "btn btn-success");
  submitButton.setAttribute("onclick", "analyzeAnswers()");
  submitButton.innerHTML = "Submit to Get a Quote";
  //parent.appendChild(submitButton);
  parent.append(submitButton);
  ++number_of_buttons;
}

function addBuildingTypeInfo(parent, buildingTypeInfo) {
  var i = 0;
  for (; i < buildingTypeInfo.length - 1; ++i) {
    //addTwoBreakTags(parent, buildingTypeInfo[i].id);
    addDivClassRow(parent);
    addDivClassColMD6(parent);
    addLabelTag(parent, buildingTypeInfo[i].id, buildingTypeInfo[i].label_text);
    //addTwoBreakTags(parent, buildingTypeInfo[i].id);
    addInputTag(parent, buildingTypeInfo[i].id);
  }
  //console.log("buildingTypeInfo[i].id = " + buildingTypeInfo[i].id);
  //addTwoBreakTags(parent, buildingTypeInfo[i].id);
/*
  let breakLine1 = document.createElement('br');
  breakLine1.setAttribute("id", "submit_button");
  parent.appendChild(breakLine1);
*/
  addButtonTag(parent, buildingTypeInfo[i].id);
}

function removeTagElement(tagName, buildingTypeStructInfo, counter_number) {
  var tagsToRemove = document.getElementsByTagName(tagName);
  if (tagsToRemove == 0) {
    alert("Error no tags to remove");
  }
  for (var i = 0; i < buildingTypeStructInfo.length; i++) {
    for (var j = 0; j < tagsToRemove.length; j++) {
      if (tagsToRemove.item(j).id == buildingTypeStructInfo[i].id) {
        tagsToRemove.item(j).remove();
        --counter_number;
      }
    }
  }
  return counter_number;
}

function removeBuildingTypeInfo(element) {

  // Remove label tags
  const labelTags = document.getElementsByTagName("label");
  if (verbose) { console.log("labelTags.length = " + labelTags.length); }
  for (var i = 0; i < element.length; ++i) {
    for (var j = 0; j < labelTags.length; ++j) {
      if (verbose) { console.log("element[j].id = " + element[i].id); } 
      if (labelTags.item(j).id == element[i].id) {
        if (verbose) { console.log("Tag id to remove = " + labelTags.item(j).id); } 
        labelTags.item(j).remove();
      }
    }
  }

  // Remove input tags
  const inputTags = document.getElementsByTagName("input");
  for (var i = 0; i < element.length; i++) {
    for (var j = 0; j < inputTags.length; j++) {
      if (verbose) { console.log("element[i].id = " + element[i].id); } 
      if (inputTags.item(j).id == element[i].id) {
        if (verbose) { console.log("item = " + inputTags.item(j).id); } 
        inputTags.item(j).remove();
      }
    }
  }

  // Remove button tag
  const buttonTag = document.getElementsByTagName("button");
  //if (verbose) { console.log("buttonTag.length = " + buttonTag.length); } 
  console.log("buttonTag.length = " + buttonTag.length);
  for (var i = 0; i < element.length; i++) {
    for (var j = 0; j < buttonTag.length; j++) {
      console.log("buttonTag.item(j).id = " + buttonTag.item(j).id);
      if (buttonTag.item(j).id == element[i].id) {
        buttonTag.item(j).remove();
        break;
      }
    }
  }
  //buttonTag.item(0).remove();
/*
  for (var i = 0; i < element.length; i++) {
    for (var j = 0; j < buttonTag.length; j++) {
      if (buttonTag.item(j).id == element[i].id) {
        console.log("buttonTag.item(j).id = " + buttonTag.item(j).id);
        buttonTag.item(j).remove();
        --number_of_buttons;
      }
    }
  }
*/

  // Remove break tags
/*
  var breakTags = document.getElementsByTagName("br");

  while (number_of_breaks > 0) {
    for (var i = 0; i < element.length; i++) {
      for (var j = 0; j < breakTags.length; j++) {
        if (breakTags.item(j).id == element[i].id) {
          //if (el_br.item(j).id == "submit_button") {
          //  continue;
          //} else {
            breakTags.item(j).remove();
            --number_of_breaks;
          //}
        }
      }
    }
  }
*/
  
  let divRowStructId = [ "rowId", "colmd6Id" ];
  var divRowTags = document.getElementsByTagName("div");
  for (var i = 0; i < divRowTags.length; i++) {
    for (var j = 0; j < divRowStructId.length; j++) {
      if (divRowTags.item(i).id == divRowStructId[j]) {
        divRowTags.item(i).remove();
      }
    }
  }
  //for (var i = 0; i < element.length; i++) {
  //for (var j = 0; j < divRowTags.length; j++) {
  //    if (divRowTags.item(j).id == element[i].id) {
  //      divRowTags.item(j).remove();
  //      --number_of_div_row;
  //    }
  //  }
  //}

  //divClassRow.setAttribute("class", "row");
  //divClassRow.setAttribute("id", "rowId");
  //divClassMD8.setAttribute("class", "col-md8 col-sm8");
  //divClassMD8.setAttribute("id", "colmd8Id");

}

function hideInputTag(idToHide) {
    var allDivs = document.getElementsByTagName("div");
    for (var i = 0; i < allDivs.length; i++) {
        if (allDivs.item(i).id == idToHide) {
            document.getElementById("firstLabel").innerHTML = "Number of apartments in the building";
            allDivs.item(i).style.display = 'none';
        }
    }
}

// function showInputTag(domElement) {
function showInputTag(idToShow) {
    var allDivs = document.getElementsByTagName("div");
    //var allLabels = document.getElementById("firstLabel");
    for (var i = 0; i < allDivs.length; i++) {
        if (allDivs.item(i).id == idToShow) {
            if (verbose) { console.log("allDivs.item(i).id = " + allDivs.item(i).id); }
            if (residentialIsShown) {
                document.getElementById("firstLabel").innerHTML = "Number of apartments in the building";
            }
            allDivs.item(i).style.display = 'block';
        }
    }
}

function validate(sel) {
  if (verbose) { console.log(sel.options[sel.selectedIndex].text); } 
  const selectedOption = sel.options[sel.selectedIndex].text;
  const body = document.body;
  //const forms = document.forms;
  //const div = document.div;
  //const divSelect = document.querySelector("div");
  const divSelect = document.querySelector("fieldset");
  const allForms = document.querySelector("form");
  const allFieldSets = document.querySelector("fieldset");
  const fieldSetIDNUM = document.getElementById("fieldsetId");
  let residentialInfo = [
    {
      id: "number_apartments",
      label_text: "apartments"
    },
    {
      id: "number_floors",
      label_text: "floors"
    },
    {
      id: "number_basements",
      label_text: "basements"
    },
    {
      id: "submit_button",
      label_text: "submit button"
    }
  ];

  let commercialInfo = [
    {
      id: "number_distinct_businesses",
      label_text: "distinct businesses"
    },
    {
      id: "number_floors",
      label_text: "floors"
    },
    {
      id: "number_basements",
      label_text: "basements"
    },
    {
      id: "number_parking",
      label_text: "parking"
    },
    {
      id: "number_elevator_cages",
      label_text: "elevator cages"
    },
    {
      id: "submit_button",
      label_text: "submit button"
    }
  ];

  let corporateInfo = [
    {
      id: "number_separate_tenant_companies",
      label_text: "separate tenant companies"
    },
    {
      id: "number_floors",
      label_text: "floors"
    },
    {
      id: "number_basements",
      label_text: "basements"
    },
    {
      id: "number_parking",
      label_text: "parking"
    },
    {
      id: "submit_button",
      label_text: "submit button"
    }
  ];

  let hybridInfo = [
    {
      id: "number_distinct_businesses",
      label_text: "distinct businesses"
    },
    {
      id: "number_floors",
      label_text: "floors"
    },
    {
      id: "number_basements",
      label_text: "basements"
    },
    {
      id: "number_parking",
      label_text: "parking"
    },
    {
      id: "number_occupants_per_floor",
      label_text: "occupants per floor"
    },
    {
      id: "number_hours_activity",
      label_text: "hours activity"
    },
    {
      id: "submit_button",
      label_text: "submit button"
    }
  ];

  if (selectedOption == "Residential") {
    if (commercialIsShown) {
      removeBuildingTypeInfo(commercialInfo);
      commercialIsShown = 0;
    } else if (corporateIsShown) {
      removeBuildingTypeInfo(corporateInfo);
      corporateIsShown = 0;
    } else if (hybridIsShown) {
      removeBuildingTypeInfo(hybridInfo);
      hybridIsShown = 0;
    }
    if (residentialIsShown == 0) {
      residentialIsShown = 1;
      //addBuildingTypeInfo(body, residentialInfo);
      //addBuildingTypeInfo(div, residentialInfo);
      //addBuildingTypeInfo(divSelect, residentialInfo);
      //addBuildingTypeInfo(allForms, residentialInfo);

      //showInputTag(allFieldSets);
      //showInputTag("rowIdFirst");
      addBuildingTypeInfo(fieldSetIDNUM, residentialInfo);
      //console.log("residentialIsShown = " + residentialIsShown);
    }
  } else if (selectedOption == "Commercial") {
    //console.log("in Commercial")
    if (residentialIsShown) {
      hideInputTag("rowIdFirst");
      removeBuildingTypeInfo(residentialInfo);
      residentialIsShown = 0;
    } else if (corporateIsShown) {
      removeBuildingTypeInfo(corporateInfo);
      corporateIsShown = 0;
    } else if (hybridIsShown) {
      removeBuildingTypeInfo(hybridInfo);
      hybridIsShown = 0;
    }
    if (commercialIsShown == 0) {
      commercialIsShown = 1;
      //addBuildingTypeInfo(divSelect, commercialInfo);
    }
      //<input type="text" id="input" maxlength="15" />
      //<button type="submit" onclick="validate()">Validate</button>
  } else if (selectedOption == "Corporate") {
    //console.log("in Commercial")
    if (residentialIsShown) {
      removeBuildingTypeInfo(residentialInfo);
      residentialIsShown = 0;
    } else if (commercialIsShown) {
      removeBuildingTypeInfo(commercialInfo);
      commercialIsShown = 0;
    } else if (hybridIsShown) {
      removeBuildingTypeInfo(hybridInfo);
      hybridIsShown = 0;
    }
    if (corporateIsShown == 0) {
      corporateIsShown = 1;
      addBuildingTypeInfo(divSelect, corporateInfo);
    }
  } else if (selectedOption == "Hybrid") {
    //console.log("in Commercial")
    if (residentialIsShown) {
      removeBuildingTypeInfo(residentialInfo);
      residentialIsShown = 0;
    } else if (commercialIsShown) {
      removeBuildingTypeInfo(commercialInfo);
      commercialIsShown = 0;
    } else if (corporateIsShown) {
      removeBuildingTypeInfo(corporateInfo);
      corporateIsShown = 0;
    } 
    if (hybridIsShown == 0) {
      hybridIsShown = 1;
      addBuildingTypeInfo(divSelect, hybridInfo);
    }
  }
}