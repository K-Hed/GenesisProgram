// fonctionne pour montrer les labels et inputs
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
        if (verbose) { console.log("value inside number hours activity = " + allInputs.item(i).checkValidity()); } 
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
  
  let divRowStructId = [ "rowId", "colmd6Id" ];
  var divRowTags = document.getElementsByTagName("div");
  for (var i = 0; i < divRowTags.length; i++) {
    for (var j = 0; j < divRowStructId.length; j++) {
      if (divRowTags.item(i).id == divRowStructId[j]) {
        divRowTags.item(i).remove();
      }
    }
  }

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
 positionOfTagStr       -> rowArray[i]
 innerLabelHtml         -> question[i]
 labelAndInputParentDiv -> secondDivArrayIds[i]
 inputId                -> inputIdReference[Residential|Commercial|Corporate|Hybrid][i]
 i goes to number of questions that a building type has
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

/*
let rowArray = [ "first", "second", "third", "fourth", "fifth", "sixth" ];
let secondDivArrayIds = [ "second_div", "fourth_div", "sixth_div", "eigth_div", "tenth_div", "twelveth" ];
let inputIdReferenceResidential = [ "number_apartments", "number_floors", "number_basements" ];
let inputIdReferenceCommercial = [ "distinct_businesses", "number_floors", "number_basements", "number_parking_spaces", "number_elevator_cages" ];
let inputIdReferenceCorporate = [ "number_tenant_companies", "number_floors", "number_basements", "number_parking_spaces", "max_occupants_per_floor" ];
let inputIdReferenceHybrid = [ "distinct_businesses", "number_floors", "number_basements", "number_parking_spaces", "number_elevator_cages", "max_occupants_per_floor", "number_hours_activity" ];

let rowArray = [ "first", "second", "third", "fourth", "fifth", "sixth" ];
let inputIdReferenceCommercial = [ "distinct_businesses", "number_floors", "number_basements", "number_parking_spaces", "number_elevator_cages" ];
var numberOfQuestionsOfABuildingType = inputIdReferenceCommercial.length;
var allDivs = document.getElementsByTagName("div");
for (var i = 0; i < allDivs.length; i++) {
    for (var j = 0; j < numberOfQuestionsOfABuildingType; j++) {
        var rowIdToRemove = rowArray[j] + "_rowId";
        if (allDivs.item(i).id == rowIdToRemove) {
            console.log(allDivs.item(i).id)
            document.getElementById(rowIdToRemove).remove();
        }
    }
}
*/
function removeRowIds(rowArray, numberOfQuestionsOfABuildingType) {
    var allDivs = document.getElementsByTagName("div");
    for (var i = 0; i < allDivs.length; i++) {
        //for (var j = 0; j < rowArray.length; j++) {
        for (var j = 0; j < numberOfQuestionsOfABuildingType; j++) {
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

  let rowArray = [ "first", "second", "third", "fourth", "fifth", "sixth" ];
  let secondDivArrayIds = [ "second_div", "fourth_div", "sixth_div", "eigth_div", "tenth_div", "twelveth" ];
  //let inputIdReferenceForRetrievingValues = [ "number_apartments", "number_floors", "number_basements", "number_apartments", "number_floors" ];
  let inputIdReferenceResidential = [ "number_apartments", "number_floors", "number_basements" ];
  let inputIdReferenceCommercial = [ "distinct_businesses", "number_floors", "number_basements", "number_parking_spaces", "number_elevator_cages" ];
  let inputIdReferenceCorporate = [ "number_tenant_companies", "number_floors", "number_basements", "number_parking_spaces", "max_occupants_per_floor" ];
  let inputIdReferenceHybrid = [ "distinct_businesses", "number_floors", "number_basements", "number_parking_spaces", "number_elevator_cages", "max_occupants_per_floor", "number_hours_activity" ];

  if (selectedOption == "Residential") {
      let questionsResidential = [ "Number of apartments", "Number of floors", "Number of basements" ];
    if (commercialIsShown) {
      //if (document.getElementById("first_rowId")) {
      //  document.getElementById("first_rowId").remove();
      //}
      //removeBuildingTypeInfo(commercialInfo);
      commercialIsShown = 0;
    } else if (corporateIsShown) {
        removeRowIds(rowArray, inputIdReferenceCorporate.length);
        //document.getElementById("rowIdFirst").remove();
        //removeBuildingTypeInfo(corporateInfo);
          corporateIsShown = 0
      //removeBuildingTypeInfo(corporateInfo);
      //corporateIsShown = 0;
    } else if (hybridIsShown) {
        removeRowIds(rowArray, inputIdReferenceHybrid.length);
        //removeBuildingTypeInfo(hybridInfo);
        hybridIsShown = 0;
      //removeBuildingTypeInfo(hybridInfo);
      //hybridIsShown = 0;
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
      for (var i = 0; i < questionsResidential.length; i++) {
        configure2(rowArray[i], questionsResidential[i], secondDivArrayIds[i], inputIdReferenceCommercial[i]);
      }
      //console.log("residentialIsShown = " + residentialIsShown);
    }
  } else if (selectedOption == "Commercial") {
    //console.log("in Commercial")
    if (residentialIsShown) {
        removeRowIds(rowArray, inputIdReferenceResidential.length);
        residentialIsShown = 0;
    } else if (corporateIsShown) {
        removeRowIds(rowArray, inputIdReferenceCorporate.length);
      //document.getElementById("rowIdFirst").remove();
      //removeBuildingTypeInfo(corporateInfo);
        corporateIsShown = 0;
    } else if (hybridIsShown) {
        removeRowIds(rowArray, inputIdReferenceHybrid.length);
      //removeBuildingTypeInfo(hybridInfo);
        hybridIsShown = 0;
    }
    if (commercialIsShown == 0) {
        let questionsCommercial = [ "Number of distinct businesses", "Number of floors", "Number of basements", "Number of parking spaces", "Number of elevator cages" ];
        for (var i = 0; i < questionsCommercial.length; i++) {
            configure2(rowArray[i], questionsCommercial[i], secondDivArrayIds[i], inputIdReferenceResidential[i]);
        }
        commercialIsShown = 1;
        
/*
      
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
    //let questionsCorporate = [ "Number of separate tenants", "Number of floors", "Number of basements", "Number of parking spaces", "Maximum number of occupants per floor" ];
    //console.log("in Commercial")
    if (residentialIsShown) {
        removeRowIds(rowArray, inputIdReferenceResidential.length);
        residentialIsShown = 0;
    } else if (commercialIsShown) {
        removeRowIds(rowArray, inputIdReferenceCommercial.length);
        commercialIsShown = 0;
    } else if (hybridIsShown) {
        removeRowIds(rowArray, inputIdReferenceHybrid.length);
        hybridIsShown = 0;
    }
    if (corporateIsShown == 0) {
      corporateIsShown = 1;

      var questionsCorporate = [ "Number of separate tenants", "Number of floors", "Number of basements", "Number of parking spaces", "Maximum number of occupants per floor" ];
      //let questions = [ "Number of separate tenant companies", "Number of floors", "Number of basements", "Number of parking spaces", "Number of occupants per floor" ];
///*
      for (var i = 0; i < questionsCorporate.length; i++) {
          console.log("questionsCorporate[i]: " + questionsCorporate[i]);
          configure2(rowArray[i], questionsCorporate[i], secondDivArrayIds[i], inputIdReferenceCorporate[i]);
      }
    }
  } else if (selectedOption == "Hybrid") {
    //console.log("in Commercial")
    if (residentialIsShown) {
        removeRowIds(rowArray, inputIdReferenceResidential.length);
        residentialIsShown = 0;
      //removeBuildingTypeInfo(residentialInfo);
      //residentialIsShown = 0;
    } else if (commercialIsShown) {
        removeRowIds(rowArray, inputIdReferenceCommercial.length);
      //removeBuildingTypeInfo(commercialInfo);
      commercialIsShown = 0;
    } else if (corporateIsShown) {
        removeRowIds(rowArray, inputIdReferenceCorporate.length);
      //removeBuildingTypeInfo(corporateInfo);
      corporateIsShown = 0;
    } 
    if (hybridIsShown == 0) {
        let questionsHybrid = [ "Number of distinct businesses", "Number of floors", "Number of basements", "Number of parking spaces", "Number of elevator cages" ];
        for (var i = 0; i < questionsHybrid.length; i++) {
            //console.log("questionsCorporate[i]: " + questionsCorporate[i]);
            configure2(rowArray[i], questionsHybrid[i], secondDivArrayIds[i], inputIdReferenceHybrid[i]);
        }
      hybridIsShown = 1;
      //addBuildingTypeInfo(divSelect, hybridInfo);
    }
  }
}