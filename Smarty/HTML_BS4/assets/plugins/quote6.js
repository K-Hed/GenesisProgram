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

/* 
 @params:
 positionOfTagStr,
 innerLabelHtml,
 labelNumStr,
 inNumStr
*/
function configure(positionOfTagStr, labelNumStr, innerLabelHtml, inNumStr) {
    var fields = document.getElementsByTagName("fieldset");
    // document.getElementsByTagName("fieldset").item(0).id OK
    var divIn = document.createElement("div");
    divIn.setAttribute("class", "row");
    var rowNameId = "rowId" + positionOfTagStr;
    //divIn.setAttribute("id", "rowIdFirst");
    divIn.setAttribute("id", rowNameId);
    //divIn.setAttribute("class", "col-md-6");
    //divIn.setAttribute("id", "colmd6Id");
    fields.item(0).appendChild(divIn);
    // document.getElementsByTagName("fieldset").item(0).appendChild(divIn);
    var secondDivIn = document.createElement("div");
    secondDivIn.setAttribute("class", "col-md-6");
    secondDivIn.setAttribute("id", "colmd6Id");
    //document.getElementById("rowIdFirst").appendChild(secondDivIn);
    document.getElementById(rowNameId).appendChild(secondDivIn);

    var labelFirst = document.createElement("label");
    labelFirst.setAttribute("for", "contact:subject");
    var labelNumberStr = labelNumStr + "label";
    labelFirst.setAttribute("id", labelNumberStr);
    // labelFirst.setAttribute("id", "firstLabel");
    //labelFirst.innerHTML = "Number of apartments in building ";
    labelFirst.innerHTML = innerLabelHtml;
    document.getElementById("colmd6Id").appendChild(labelFirst);
    //col-md-6" id="colmd6Id

    var firstInput = document.createElement("input");
    firstInput.setAttribute("type", "number");
    firstInput.setAttribute("class", "form-control");
    //firstInput.setAttribute("id", "first_input");
    var inputNumberStr = inNumStr + "_input";
    firstInput.setAttribute("id", inputNumberStr);
    //document.getElementById("firstLabel").appendChild(firstInput);
    document.getElementById("colmd6Id").appendChild(firstInput);
}

/* 
 @params:
 positionOfTagStr,
 innerLabelHtml
*/
function configure2(positionOfTagStr, innerLabelHtml, labelAndInputParentDiv, inputId) {
    //var fields = document.getElementsByTagName("fieldset");
    // document.getElementsByTagName("fieldset").item(0).id OK
    var divIn = document.createElement("div");
    divIn.setAttribute("class", "row");
    var rowNameId = positionOfTagStr + "_rowId";
    //divIn.setAttribute("id", "first_rowId");
    divIn.setAttribute("id", rowNameId);
    //fields.item(0).appendChild(divIn);
    document.getElementsByTagName("fieldset").item(0).appendChild(divIn);
    var secondDivIn = document.createElement("div");
    secondDivIn.setAttribute("class", "col-md-6");
    secondDivIn.setAttribute("id", "colmd6Id");
    secondDivIn.setAttribute("id", labelAndInputParentDiv); // == second_div here
    //document.getElementById("rowIdFirst").appendChild(secondDivIn);
    document.getElementById(rowNameId).appendChild(secondDivIn);

    var labelFirst = document.createElement("label");
    labelFirst.setAttribute("for", "contact:subject");
    //var labelNumberStr = positionOfTagStr + "_label";
    //labelFirst.setAttribute("id", labelNumberStr);
    // labelFirst.setAttribute("id", "first_label");
    //labelFirst.innerHTML = "Number of apartments in building ";
    labelFirst.innerHTML = innerLabelHtml;
    //document.getElementById("colmd6Id").appendChild(labelFirst);
    //col-md-6" id="colmd6Id
    document.getElementById(labelAndInputParentDiv).appendChild(labelFirst);

    var firstInput = document.createElement("input");
    firstInput.setAttribute("type", "number");
    firstInput.setAttribute("class", "form-control");
    //firstInput.setAttribute("id", "first_input");
    //var inputNumberStr = positionOfTagStr + "_input";
    //firstInput.setAttribute("id", inputNumberStr);
    firstInput.setAttribute("id", inputId);
    //document.getElementById("colmd6Id").appendChild(firstInput);
    document.getElementById(labelAndInputParentDiv).appendChild(firstInput);
}

function removeRowIds(rowArray) {
    var allDivs = document.getElementsByTagName("div");
    for (var i = 0; i < allDivs.length; i++) {
        for (var j = 0; j < rowArray.length; j++) {
            var rowIdToRemove = rowArray[j] + "_rowId";
            if (allDivs.item(i).id == rowIdToRemove) {
                if (verbose) { console.log(allDivs.item(i).id); }
                document.getElementById(rowIdToRemove).remove();
            }
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

  let rowArray = [ "first", "second", "third", "fourth", "fifth" ];
  let secondDivArrayIds = [ "second_div", "fourth_div", "sixth_div", "eigth_div", "tenth_div" ];
  //let inputIdReferenceForRetrievingValues = [ "number_apartments", "number_floors", "number_basements", "number_apartments", "number_floors" ];
  let inputIdReferenceResidential = [ "number_apartments", "number_floors", "number_basements" ];
  let inputIdReferenceCommercial = [ "distinct_businesses", "number_floors", "number_basements", "number_parking_spaces", "number_elevator_cages" ];
  let inputIdReferenceCorporate = [ "number_tenant_companies", "number_floors", "number_basements", "number_parking_spaces", "number_elevator_cages", "max_occupants_per_floor" ];
  let inputIdReferenceHybrid = [ "distinct_businesses", "number_floors", "number_basements", "number_parking_spaces", "number_elevator_cages", "max_occupants_per_floor", "number_hours_activity" ];

  if (selectedOption == "Residential") {
      let questions = [ "Number of apartments", "Number of floors", "Number of basements" ];
    if (commercialIsShown) {
      if (document.getElementById("first_rowId")) {
        document.getElementById("first_rowId").remove();
      }
      //removeBuildingTypeInfo(commercialInfo);
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
/*
      var fields = document.getElementsByTagName("fieldset");
      // document.getElementsByTagName("fieldset").item(0).id OK
      var divIn = document.createElement("div");
      divIn.setAttribute("class", "row");
      divIn.setAttribute("id", "rowIdFirst");
      //divIn.setAttribute("class", "col-md-6");
      //divIn.setAttribute("id", "colmd6Id");
      fields.item(0).appendChild(divIn);
      // document.getElementsByTagName("fieldset").item(0).appendChild(divIn);
      var secondDivIn = document.createElement("div");
      secondDivIn.setAttribute("class", "col-md-6");
      secondDivIn.setAttribute("id", "colmd6Id");
      document.getElementById("rowIdFirst").appendChild(secondDivIn);

      var labelFirst = document.createElement("label");
      labelFirst.setAttribute("for", "contact:subject");
      labelFirst.setAttribute("id", "firstLabel");
      labelFirst.innerHTML = "Number of apartments in building ";
      document.getElementById("colmd6Id").appendChild(labelFirst);
      //col-md-6" id="colmd6Id

      var firstInput = document.createElement("input");
      firstInput.setAttribute("type", "number");
      firstInput.setAttribute("class", "form-control");
      firstInput.setAttribute("id", "first_input");
      //document.getElementById("firstLabel").appendChild(firstInput);
      document.getElementById("colmd6Id").appendChild(firstInput);
*/
      //configure("second", "second", "Number of floors", "second");
      for (var i = 0; i < questions.length; i++) {
        configure2(rowArray[i], questions[i], secondDivArrayIds[i], inputIdReferenceCommercial[i]);
      }
      //console.log("residentialIsShown = " + residentialIsShown);
    }
  } else if (selectedOption == "Commercial") {
    //console.log("in Commercial")
    if (residentialIsShown) {
        removeRowIds(rowArray);
/*
        var allDivs = document.getElementsByTagName("div");
        for (var i = 0; i < allDivs.length; i++) {
            for (var j = 0; j < rowArray.length; j++) {
                var rowIdToRemove = rowArray[j] + "_rowId";
                if (allDivs.item(i).id == rowIdToRemove) {
                    console.log(allDivs.item(i).id);
                    document.getElementById(rowIdToRemove).remove();
                }
            }
        }
*/
      residentialIsShown = 0;
    } else if (corporateIsShown) {
      document.getElementById("rowIdFirst").remove();
      //removeBuildingTypeInfo(corporateInfo);
      corporateIsShown = 0;
    } else if (hybridIsShown) {
      removeBuildingTypeInfo(hybridInfo);
      hybridIsShown = 0;
    }
    if (commercialIsShown == 0) {
        let questions = [ "Number of distinct businesses", "Number of floors", "Number of basements", "Number of parking spaces", "Number of elevator cages" ];
        for (var i = 0; i < questions.length; i++) {
            configure2(rowArray[i], questions[i], secondDivArrayIds[i], inputIdReferenceResidential[i]);
        }
/*
      commercialIsShown = 1;
      var fields = document.getElementsByTagName("fieldset");
      // document.getElementsByTagName("fieldset").item(0).id OK
      var divIn = document.createElement("div");
      divIn.setAttribute("class", "row");
      divIn.setAttribute("id", "rowIdSecond");
      //divIn.setAttribute("class", "col-md-6");
      //divIn.setAttribute("id", "colmd6Id");
      fields.item(0).appendChild(divIn);
      // document.getElementsByTagName("fieldset").item(0).appendChild(divIn);
      var secondDivIn = document.createElement("div");
      secondDivIn.setAttribute("class", "col-md-6");
      secondDivIn.setAttribute("id", "colmd6Id");
      document.getElementById("rowIdSecond").appendChild(secondDivIn);

      var labelFirst = document.createElement("label");
      labelFirst.setAttribute("for", "contact:subject");
      labelFirst.setAttribute("id", "secondLabel");
      labelFirst.innerHTML = "Number of distinct businesses ";
      document.getElementById("colmd6Id").appendChild(labelFirst);
      //col-md-6" id="colmd6Id

      var firstInput = document.createElement("input");
      firstInput.setAttribute("type", "number");
      firstInput.setAttribute("class", "form-control");
      firstInput.setAttribute("id", "second_input");
      //document.getElementById("firstLabel").appendChild(firstInput);
      document.getElementById("colmd6Id").appendChild(firstInput);
      //addBuildingTypeInfo(divSelect, commercialInfo);
*/
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