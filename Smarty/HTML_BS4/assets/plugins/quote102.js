let residentialIsShown = 0;
let commercialIsShown = 0;
let corporateIsShown = 0;
let hybridIsShown = 0;
let verbose = 0;
var oldAvgDoorsPerFloor = -1;
// let inputIdReferenceResidential = [ "number-of-apartments", "number-of-floors", "number-of-basements" ];
//  let inputIdReferenceCommercial = [ "distinct_businesses", "number-of-floors", "number-of-basements", "number-of-parking-spots", "number-of-elevators" ];
//  let inputIdReferenceCorporate = [ "number-of-corporations", "number-of-floors", "number-of-basements", "number-of-parking-spots", "maximum-occupancy" ];
//  let inputIdReferenceHybrid = [ "distinct_businesses", "number-of-floors", "number-of-basements", "number-of-parking-spots", "maximum-occupancy", "business-hours" ];

// must have the id and the value
var buildingDataArrayResidential = [ { inputId: "",  nApartments: 0 },
                                     { inputId: "",  nFloors: 0 },
                                     { inputId: "",  nBasements: 0 }
                                    ];
var buildingDataArrayCommercial = [ { inputId: "",  nDistinctBusinesses: 0 },
                                    { inputId: "",  nFloors: 0 },
                                    { inputId: "",  nBasements: 0 },
                                    { inputId: "",  nParkingSpaces: 0 },
                                    { inputId: "",  nElevatorCages: 0 }
                                    ];
var buildingDataArrayCorporate =  [ { inputId: "",  nSeparateTenantCompanies: 0 },
                                    { inputId: "",  nFloors: 0 },
                                    { inputId: "",  nBasements: 0 },
                                    { inputId: "",  nParkingSpaces: 0 },
                                    { inputId: "",  nOccupants: 0 }
                                    ];
var buildingDataArrayHybrid     =  [ { inputId: "",  nDistinctBusinesses: 0 },
                                    { inputId: "",  nFloors: 0 },
                                    { inputId: "",  nBasements: 0 },
                                    { inputId: "",  nParkingSpaces: 0 },
                                    { inputId: "",  nOccupants: 0 },
                                    { inputId: "",  nHoursActivity: 0 }
                                    ];

function analyzeAnswers() {
  var allInputs = document.getElementsByTagName("input");
  if (verbose) { console.log("allInputs.length = " + allInputs.length); }
 
  if (hybridIsShown) {
    var inputTag = document.getElementById("business-hours");
    inputTag.addEventListener('input', function() {
        if (inputTag.innerText > 24) {
            alert("invalid");
        }
    });
    console.log("inputTag = " + inputTag);
    for (var i = 0; i < allInputs.length; i++) {
      if (allInputs.item(i).id == "business-hours") {
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
}

function retrieveValue(inputId) {
    //console.log("inputId = ", inputId);
    return document.getElementById(inputId).value;
}

function giveQuote(inputId) {
    var inputValue = retrieveValue(inputId);
    if (residentialIsShown) {
        var inputApartments = 0;
        var inputFloors = 0;
        var inputBasements = 0;
        if (inputId == "number-of-apartments") {
            inputApartments = inputValue;
            buildingDataArrayResidential[0].inputId = inputId;
            buildingDataArrayResidential[0].nApartments = inputValue;
            //buildingDataArrayResidential.inputId = inputId;
            //buildingDataArrayResidential.nApartments.push(inputValue);
        } else if (inputId == "number-of-floors") {
            inputFloors = inputValue;
            buildingDataArrayResidential[1].inputId = inputId;
            buildingDataArrayResidential[1].nFloors = inputValue;
        } else if (inputId == "number-of-basements") {
            inputBasements = inputValue;
            buildingDataArrayResidential[2].inputId = inputId;
            buildingDataArrayResidential[2].nBasements = inputValue;
        }
        return buildingDataArrayResidential;
    } else  if (corporateIsShown) {
        var inputApartments = 0;
        var inputFloors = 0;
        var inputBasements = 0;
        if (inputId == "number-of-corporations") {
            buildingDataArrayCorporate[0].inputId = inputId;
            buildingDataArrayCorporate[0].nSeparateTenantCompanies = inputValue;
            //buildingDataArrayHybrid[0].inputId = inputId;
            //buildingDataArrayHybrid[0].nSeparateTenantCompanies = inputValue;
        } else if (inputId == "number-of-floors") {
            inputFloors = inputValue;
            buildingDataArrayCorporate[1].inputId = inputId;
            buildingDataArrayCorporate[1].nFloors = inputValue;
            console.log("buildingDataArrayCorporate[1].nFloors = " + buildingDataArrayCorporate[1].nFloors);
        } else if (inputId == "number-of-basements") {
            inputBasements = inputValue;
            buildingDataArrayCorporate[2].inputId = inputId;
            buildingDataArrayCorporate[2].nBasements = inputValue;
        } else if (inputId == "number-of-parking-spots") {
            buildingDataArrayCorporate[3].inputId = inputId;
            buildingDataArrayCorporate[3].nParkingSpaces = inputValue;
        } else if (inputId == "maximum-occupancy") {
            buildingDataArrayCorporate[4].inputId = inputId;
            buildingDataArrayCorporate[4].nOccupants = inputValue;
        } 
    } else  if (hybridIsShown) {
        var inputApartments = 0;
        var inputFloors = 0;
        var inputBasements = 0;
        if (inputId == "distinct_businesses") {
            buildingDataArrayHybrid[0].inputId = inputId;
            buildingDataArrayHybrid[0].nDistinctBusinesses = inputValue;
        } else if (inputId == "number-of-floors") {
            inputFloors = inputValue;
            buildingDataArrayHybrid[1].inputId = inputId;
            buildingDataArrayHybrid[1].nFloors = inputValue;
        } else if (inputId == "number-of-basements") {
            inputBasements = inputValue;
            buildingDataArrayHybrid[2].inputId = inputId;
            buildingDataArrayHybrid[2].nBasements = inputValue;
        } else if (inputId == "number-of-parking-spots") {
            buildingDataArrayHybrid[3].inputId = inputId;
            buildingDataArrayHybrid[3].nParkingSpaces = inputValue;
        } else if (inputId == "maximum-occupancy") {
            buildingDataArrayHybrid[4].inputId = inputId;
            buildingDataArrayHybrid[4].nOccupants = inputValue;
        } else if (inputId == "business-hours") {
            buildingDataArrayHybrid[5].inputId = inputId;
            buildingDataArrayHybrid[5].nHoursActivity = inputValue;
        }
    //return buildingDataArrayCorporate;
    }
    
}

function calculateResidential(buildingDataArrayResidential, inputId) {
    var inputValue = retrieveValue(inputId);
    //buildingDataArrayResidential = giveQuote(inputId);
    //giveQuote(inputId);
    var avgDoorsPerFloor = 0;
    var nElevatorShafts = 0;
    var nElevators = 0;
    var nElevatorColumns = 1;
    var nElevatorsPerColumn = 0;
    var nElevatorsTotal = 0;

    if (buildingDataArrayResidential[0].nApartments.length &&
        buildingDataArrayResidential[1].nFloors.length) {

            avgDoorsPerFloor = buildingDataArrayResidential[0].nApartments / buildingDataArrayResidential[1].nFloors;
            console.log("avgDoorsPerFloor = " + avgDoorsPerFloor);

            nElevatorsPerColumn = Math.ceil(avgDoorsPerFloor / 6);
            console.log("nElevatorsPerColumn = " + nElevatorsPerColumn);

            nElevatorColumns = Math.ceil(buildingDataArrayResidential[1].nFloors / 20);
             //console.log("nElevatorColumns = " + nElevatorColumns);

             var col = nElevatorColumns;

             while (col > 20) {
                 col -= 20;
                 nElevators++;
             }
            nElevators = nElevatorColumns * nElevatorsPerColumn;
            
            console.log("nElevators = " + nElevators + nElevatorColumns);

            var allInputs = document.getElementsByTagName("input");
            for (var i = 0; i < allInputs.length; i++) {
                if (allInputs.item(i).id == "number_elevators") {
                    allInputs.item(i).value = nElevators;
                } else if (allInputs.item(i).id == "number_columns") {
                    allInputs.item(i).value = nElevatorColumns;
                } else if (allInputs.item(i).id == "number_elevator_per_column") {
                    allInputs.item(i).value = nElevatorsPerColumn;
                }
            }
    }
}

function calculateCommercial(buildingDataArrayCommercial, inputId) {
    var inputValue = retrieveValue(inputId);
    var allInputs = document.getElementsByTagName("input");
    console.log("commercial = " + buildingDataArrayCommercial[4].nElevatorCages);
    for (var i = 0; i < allInputs.length; i++) {
        if (allInputs.item(i).id == "number_elevators") {
            allInputs.item(i).value = buildingDataArrayCommercial[4].nElevatorCages || 0;
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
    //console.log("inputId = " + inputId);
    var divIn = document.createElement("div");
    divIn.setAttribute("class", "row");
    var rowNameId = positionOfTagStr + "_rowId";
    
    divIn.setAttribute("id", rowNameId);
    document.getElementsByTagName("fieldset").item(0).appendChild(divIn);
    var secondDivIn = document.createElement("div");
    secondDivIn.setAttribute("class", "col-md-6");
    secondDivIn.setAttribute("id", "colmd6Id");
    secondDivIn.setAttribute("id", labelAndInputParentDiv); // == second_div here
    document.getElementById(rowNameId).appendChild(secondDivIn);

    var labelFirst = document.createElement("label");
    labelFirst.setAttribute("for", "contact:subject");
    labelFirst.innerHTML = innerLabelHtml;
    document.getElementById(labelAndInputParentDiv).appendChild(labelFirst);

    var firstInput = document.createElement("input");
    firstInput.setAttribute("type", "number");
    firstInput.setAttribute("class", "form-control");
    firstInput.setAttribute("id", inputId);
    if (hybridIsShown) {
        //firstInput.setAttribute("onchange", "analyzeAnswers();");
        firstInput.setAttribute("max", "24");
    }
    //firstInput.addEventListener('input', () => {
    //    console.log("input = ", firstInput.value);
    //});
    firstInput.addEventListener('input', () => {
        var inputValue = retrieveValue(inputId);
        buildingDataArrayResidential = giveQuote(inputId);
        //giveQuote(inputId);
        var avgDoorsPerFloor = 0;
        var nElevatorShafts = 0;
        var nColumns = 0;
        var nOccupants = 0;
        var nElevators = 0;
        var nElevatorColumns = 0;
        var nElevatorsPerColumn = 0;
        var nElevatorsTotal = 0;


        if (residentialIsShown) {
            calculateResidential(buildingDataArrayResidential, inputId);
        } else if (corporateIsShown) {
            //giveQuote(inputId);
            /*
            nColumns == nElevatorColumns ???????


            */
            if (buildingDataArrayCorporate[1].nFloors > 20) {
                nElevatorShafts *= 2;
                var addToNColumns = 0;
                addToNColumns = Math.ceil(buildingDataArrayCorporate[1].nFloors / 20);
                for (var i = 0; i < addToNColumns; i++) {
                    nColumns++;
                }
            } else if (buildingDataArrayCorporate[1].nFloors <= 20) {
                nColumns = 1;
            }
            nOccupants = buildingDataArrayCorporate[4].nOccupants * (buildingDataArrayCorporate[1].nFloors + buildingDataArrayCorporate[2].nBasements);
            nElevators = nOccupants / 100;
            console.log("buildingDataArrayCorporate[1].nFloors = " + buildingDataArrayCorporate[1].nFloors);
            console.log("buildingDataArrayCorporate[2].nBasements = " + buildingDataArrayCorporate[2].nBasements);
            nElevatorColumns = Math.ceil((buildingDataArrayCorporate[1].nFloors + buildingDataArrayCorporate[2].nBasements) / 20);
            console.log("nElevatorColumns = " + nElevatorColumns);
            nElevatorsPerColumn = nElevators / nElevatorColumns;
            console.log("nElevatorsPerColumn = " + nElevatorsPerColumn);
            nElevatorsTotal = nElevatorsPerColumn * nElevatorColumns;
            console.log("nElevators = " + nElevators);
            if (hybridIsShown) {
                if (buildingDataArrayHybrid[1].nFloors > 20) {
                    nElevatorShafts *= 2;
                    var addToNColumns = 0;
                    addToNColumns = Math.ceil(buildingDataArrayHybrid[1].nFloors / 20);
                    for (var i = 0; i < addToNColumns; i++) {
                        nColumns++;
                    }
                } else if (buildingDataArrayCorporate[1].nFloors <= 20) {
                    nColumns = 1;
                }
                nOccupants = buildingDataArrayHybid[4].nOccupants * (buildingDataArrayHybrid[1].nFloors + buildingDataArrayHybrid[2].nBasements);
                nElevators = nOccupants / 100;
                console.log("buildingDataArrayHybrid[1].nFloors = " + buildingDataArrayHybrid[1].nFloors);
                console.log("buildingDataArrayHybrid[2].nBasements = " + buildingDataArrayHybrid[2].nBasements);
                nElevatorColumns = Math.ceil((buildingDataArrayHybrid[1].nFloors + buildingDataArrayHybrid[2].nBasements) / 20);
                console.log("nElevatorColumns = " + nElevatorColumns);
                nElevatorsPerColumn = nElevators / nElevatorColumns;
                console.log("nElevatorsPerColumn = " + nElevatorsPerColumn);
                nElevatorsTotal = nElevatorsPerColumn * nElevatorColumns;
                console.log("nElevators = " + nElevators);
                //if (buildingDataArrayHybrid[5].nHoursActivity > 24) {
                    //alert("Error");
                   // document.getElementById("maximum-occupancy").innerText = document.getElementById("maximum-occupancy").validate;
                //}
            }
            console.log("nElevatorsTotal = " + nElevatorsTotal);
            document.getElementById("result").value = Math.ceil(nElevatorsTotal / 100);
        } else if (hybridIsShown) {
            if (buildingDataArrayHybrid[1].nFloors > 20) {
                nElevatorShafts *= 2;
                var addToNColumns = 0;
                addToNColumns = Math.ceil(buildingDataArrayHybrid[1].nFloors / 20);
                for (var i = 0; i < addToNColumns; i++) {
                    nColumns++;
                }
            } else if (buildingDataArrayCorporate[1].nFloors <= 20) {
                nColumns = 1;
            }
            nOccupants = buildingDataArrayHybrid[4].nOccupants * (buildingDataArrayHybrid[1].nFloors + buildingDataArrayHybrid[2].nBasements);
            nElevators = nOccupants / 100;
            console.log("buildingDataArrayHybrid[1].nFloors = " + buildingDataArrayHybrid[1].nFloors);
            console.log("buildingDataArrayHybrid[2].nBasements = " + buildingDataArrayHybrid[2].nBasements);
            nElevatorColumns = Math.ceil((buildingDataArrayHybrid[1].nFloors + buildingDataArrayHybrid[2].nBasements) / 20);
            console.log("nElevatorColumns = " + nElevatorColumns);
            nElevatorsPerColumn = nElevators / nElevatorColumns;
            console.log("nElevatorsPerColumn = " + nElevatorsPerColumn);
            nElevatorsTotal = nElevatorsPerColumn * nElevatorColumns;
            console.log("nElevators = " + nElevators);
            //if (buildingDataArrayHybrid[5].nHoursActivity > 24) {
                //alert("Error");
               // document.getElementById("maximum-occupancy").innerText = document.getElementById("maximum-occupancy").validate;
            //}
            console.log("nElevatorsTotal = " + nElevatorsTotal);
            document.getElementById("result").value = Math.ceil(nElevatorsTotal / 100);






        } else if (commercialIsShown) {
            buildingDataArrayCommercial = giveQuote(inputId);
            calculateCommercial(buildingDataArrayCommercial, inputId);
        }

        // Find which one of the radio buttons is selected
/*
        var finalPrice = 0;
        var radioInput = document.querySelector('input[name="radio-btn"]:checked').value;
        radioInput.addEventListener('input', () => {
            finalPrice += radioInput.value;
        });
        console.log("finalPrice = " + finalPrice);
        console.log("radioInput = " + radioInput);
*/
        



        
        
/*
        if (residentialIsShown) {
            var inputApartments = 0;
            var inputFloors = 0;
            var inputBasements = 0;
            if (inputId == "number-of-apartments") {
                inputApartments = inputValue;
            } else if (inputId == "number-of-floors") {
                inputFloors = inputValue;
            } else if (inputId == "number-of-basements") {
                inputBasements = inputValue;
            }
        }
*/
        if (verbose) { console.log("inputId = " + inputId); }
        if (verbose) { console.log("inputValue = " + inputValue); }
    });


    document.getElementById(labelAndInputParentDiv).appendChild(firstInput);


}

function removeRowIds(rowArray, numberOfQuestionsOfABuildingType) {
    var allDivs = document.getElementsByTagName("div");
    for (var i = 0; i < allDivs.length; i++) {
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
  //let inputIdReferenceForRetrievingValues = [ "number-of-apartments", "number-of-floors", "number-of-basements", "number-of-apartments", "number-of-floors" ];
  let inputIdReferenceResidential = [ "number-of-apartments", "number-of-floors", "number-of-basements" ];
  let inputIdReferenceCommercial = [ "distinct_businesses", "number-of-floors", "number-of-basements", "number-of-parking-spots", "number-of-elevators" ];
  let inputIdReferenceCorporate = [ "number-of-corporations", "number-of-floors", "number-of-basements", "number-of-parking-spots", "maximum-occupancy" ];
  let inputIdReferenceHybrid = [ "distinct_businesses", "number-of-floors", "number-of-basements", "number-of-parking-spots", "maximum-occupancy", "business-hours" ];

  if (selectedOption == "Residential") {
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
    clearInputs();
    if (residentialIsShown == 0) {
      residentialIsShown = 1;
      let questionsResidential = [ "Number of apartments", "Number of floors", "Number of basements" ];
      for (var i = 0; i < questionsResidential.length; i++) {
        configure2(rowArray[i], questionsResidential[i], secondDivArrayIds[i], inputIdReferenceResidential[i]);
      }
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
    clearInputs();
    if (commercialIsShown == 0) {
        commercialIsShown = 1;
        let questionsCommercial = [ "Number of distinct businesses", "Number of floors", "Number of basements", "Number of parking spaces", "Number of elevator cages" ];
        for (var i = 0; i < questionsCommercial.length; i++) {
            configure2(rowArray[i], questionsCommercial[i], secondDivArrayIds[i], inputIdReferenceCommercial[i]);
        }
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
    clearInputs();
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
    clearInputs();
    if (hybridIsShown == 0) {
        hybridIsShown = 1;
        let questionsHybrid = [ "Number of distinct businesses", "Number of floors", "Number of basements", "Number of parking spaces", "Maximum number of occupants per floor", "Number of hours of activity" ];
        for (var i = 0; i < questionsHybrid.length; i++) {
            //console.log("questionsCorporate[i]: " + questionsCorporate[i]);
            configure2(rowArray[i], questionsHybrid[i], secondDivArrayIds[i], inputIdReferenceHybrid[i]);
        }
        var inputTag = document.getElementById("business-hours");
        inputTag.addEventListener('input', function() {
            console.log("inputTag: " + inputTag.value);
            if (inputTag.value > 24) {
                alert("Please choose a number smaller than 24");
            }
        });
    }
  } else {
    if (residentialIsShown) {
        removeRowIds(rowArray, inputIdReferenceResidential.length);
        residentialIsShown = 0;
    } else if (commercialIsShown) {
        removeRowIds(rowArray, inputIdReferenceCommercial.length);
        commercialIsShown = 0;
    } else if (corporateIsShown) {
        removeRowIds(rowArray, inputIdReferenceCorporate.length);
        corporateIsShown = 0;
    } else if (hybridIsShown) {
        removeRowIds(rowArray, inputIdReferenceHybrid.length);
        hybridIsShown = 0;
    }
  }
  //if (document.getElementById("radio-input-shaft").checked) {
  //  var valeur = document.getElementById("radio-input-shaft").value;
  //  console.log("radioBtn = " + valeur);
  //}

}

function getRadioButtons() {
    //var value_radio = document.getElementById("radio-input-shaft");
    //console.log("value_radio = " + value_radio.value);
    var allInputs = document.getElementsByTagName("input");
    for (var i = 0; i < allInputs.length; i++) {
        if (allInputs.item(i).name == "radio-btn") {
            if (allInputs.item(i).checked) {
                if (verbose) { console.log("value = " + allInputs.item(i).value); }
                //console.log("price = " + allInputs.item(i).data-price);   
            }
        }
    }
    //if (document.getElementById("radio-input-shaft").checked) {
    //    var valeur = document.getElementById("radio-input-shaft").value;
    //    console.log("radioBtn = " + valeur);
    //  }
}

function clearInputs() {
    var inputValues = document.getElementsByTagName("input");
    for (var i = 0; i < inputValues.length; i++) {
        if (inputValues.item(i).id == "result") {
            inputValues.item(i).value = "";
        }
    }
}

// negative numbers
// verfication data

//if (document.getElementById("radio-input-shaft").checked) {
//    var valeur = document.getElementById("radio-input-shaft").value;
//    console.log("radioBtn = " + valeur);
//}