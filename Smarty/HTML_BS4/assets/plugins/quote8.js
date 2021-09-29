let residentialIsShown = 0;
let commercialIsShown = 0;
let corporateIsShown = 0;
let hybridIsShown = 0;
let verbose = 1;

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

function hideInputTag(idToHide) {
    var allDivs = document.getElementsByTagName("div");
    for (var i = 0; i < allDivs.length; i++) {
        if (allDivs.item(i).id == idToHide) {
            document.getElementById("firstLabel").innerHTML = "Number of apartments in the building";
            allDivs.item(i).style.display = 'none';
        }
    }
}

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
        removeRowIds(rowArray, inputIdReferenceCommercial.length);
        commercialIsShown = 0;
    } else if (corporateIsShown) {
        removeRowIds(rowArray, inputIdReferenceCorporate.length);
        corporateIsShown = 0
    } else if (hybridIsShown) {
        removeRowIds(rowArray, inputIdReferenceHybrid.length);
        hybridIsShown = 0;
    }
    if (residentialIsShown == 0) {
      residentialIsShown = 1;
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
        corporateIsShown = 0;
    } else if (hybridIsShown) {
        removeRowIds(rowArray, inputIdReferenceHybrid.length);
        hybridIsShown = 0;
    }
    if (commercialIsShown == 0) {
        let questionsCommercial = [ "Number of distinct businesses", "Number of floors", "Number of basements", "Number of parking spaces", "Number of elevator cages" ];
        for (var i = 0; i < questionsCommercial.length; i++) {
            configure2(rowArray[i], questionsCommercial[i], secondDivArrayIds[i], inputIdReferenceResidential[i]);
        }
        commercialIsShown = 1;
    }
  } else if (selectedOption == "Corporate") {
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
      for (var i = 0; i < questionsCorporate.length; i++) {
          if (verbose) { console.log("questionsCorporate[i]: " + questionsCorporate[i]); }
          configure2(rowArray[i], questionsCorporate[i], secondDivArrayIds[i], inputIdReferenceCorporate[i]);
      }
    }
  } else if (selectedOption == "Hybrid") {
    //console.log("in Commercial")
    if (residentialIsShown) {
        removeRowIds(rowArray, inputIdReferenceResidential.length);
        residentialIsShown = 0;
    } else if (commercialIsShown) {
        removeRowIds(rowArray, inputIdReferenceCommercial.length);
        commercialIsShown = 0;
    } else if (corporateIsShown) {
        removeRowIds(rowArray, inputIdReferenceCorporate.length);
        corporateIsShown = 0;
    } 
    if (hybridIsShown == 0) {
        let questionsHybrid = [ "Number of distinct businesses", "Number of floors", "Number of basements", "Number of parking spaces", "Number of elevator cages" ];
        hybridIsShown = 1;
        for (var i = 0; i < questionsHybrid.length; i++) {
            //console.log("questionsCorporate[i]: " + questionsCorporate[i]);
            configure2(rowArray[i], questionsHybrid[i], secondDivArrayIds[i], inputIdReferenceHybrid[i]);
        }
    }
  }
}