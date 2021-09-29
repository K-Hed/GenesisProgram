let residentialIsShown = 0;
let commercialIsShown = 0;
let corporateIsShown = 0;
let hybridIsShown = 0;
let verbose = 0;
var oldAvgDoorsPerFloor = -1;
// let inputIdReferenceResidential = [ "number_apartments", "number_floors", "number_basements" ];
//  let inputIdReferenceCommercial = [ "distinct_businesses", "number_floors", "number_basements", "number_parking_spaces", "number_elevator_cages" ];
//  let inputIdReferenceCorporate = [ "number_tenant_companies", "number_floors", "number_basements", "number_parking_spaces", "max_occupants_per_floor" ];
//  let inputIdReferenceHybrid = [ "distinct_businesses", "number_floors", "number_basements", "number_parking_spaces", "max_occupants_per_floor", "number_hours_activity" ];

// must have the id and the value
var buildingDataArrayResidential = [ { inputId: "",  nApartments: "" },
                                     { inputId: "",  nFloors: "" },
                                     { inputId: "",  nBasements: "" }
                                    ];
var buildingDataArrayCommercial = [ { inputId: "",  nDistinctBusinesses: "" },
                                    { inputId: "",  nFloors: "" },
                                    { inputId: "",  nBasements: "" },
                                    { inputId: "",  nParkingSpaces: "" },
                                    { inputId: "",  nElevatorCages: "" }
                                    ];
var buildingDataArrayCorporate =  [ { inputId: "",  nSeparateTenantCompanies: "" },
                                    { inputId: "",  nFloors: "" },
                                    { inputId: "",  nBasements: "" },
                                    { inputId: "",  nParkingSpaces: "" },
                                    { inputId: "",  nOccupants: "" }
                                    ];
var buildingDataArrayHybrid     =  [ { inputId: "",  nDistinctBusinesses: "" },
                                    { inputId: "",  nFloors: "" },
                                    { inputId: "",  nBasements: "" },
                                    { inputId: "",  nParkingSpaces: "" },
                                    { inputId: "",  nOccupants: "" },
                                    { inputId: "",  nHoursActivity: "" }
                                    ];
/*
var buildingDataArrayResidential = { inputId: "", 
                                     nApartments: "",
                                     inputId: "", 
                                     nFloors: "",
                                     inputId: "", 
                                     nBasements: "" };

var buildingDataArrayCommercial = { inputId: "",
                                    distinctBusinesses: "",
                                    inputId: "",
                                    nFloors: "",
                                    inputId: "", 
                                    nBasements: "",
                                    inputId: "", 
                                    nParkingSpaces: "",
                                    inputId: "", 
                                    nElevatorCages: "" };

var buildingDataArrayCommercial = { inputId: "", value: "" };
*/

function analyzeAnswers() {
  var allInputs = document.getElementsByTagName("input");
  if (verbose) { console.log("allInputs.length = " + allInputs.length); }
 
  if (hybridIsShown) {
    var inputTag = document.getElementById("number_hours_activity");
    inputTag.addEventListener('input', function() {
        if (inputTag.innerText > 24) {
            alert("invalid");
        }
    });
    console.log("inputTag = " + inputTag);
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

function retrieveValue(inputId) {
    //console.log("inputId = ", inputId);
    return document.getElementById(inputId).value;
}

function addTobuildingDataArray(dataInput) {
    buildingDataArray.push(dataInput);
}

function addToBuildingDataPriceArray(buildingType, dataArray) {
    if (buildingType == "Residential") {
        for (var i = 0; i< dataArray.length; i++) {
            buildingDataArray.push(dataArray[i]);
        }

    }
}

function giveQuote(inputId) {
    var inputValue = retrieveValue(inputId);
    if (residentialIsShown) {
        var inputApartments = 0;
        var inputFloors = 0;
        var inputBasements = 0;
        if (inputId == "number_apartments") {
            inputApartments = inputValue;
            buildingDataArrayResidential[0].inputId = inputId;
            buildingDataArrayResidential[0].nApartments = inputValue;
            //buildingDataArrayResidential.inputId = inputId;
            //buildingDataArrayResidential.nApartments.push(inputValue);
        } else if (inputId == "number_floors") {
            inputFloors = inputValue;
            buildingDataArrayResidential[1].inputId = inputId;
            buildingDataArrayResidential[1].nFloors = inputValue;
        } else if (inputId == "number_basements") {
            inputBasements = inputValue;
            buildingDataArrayResidential[2].inputId = inputId;
            buildingDataArrayResidential[2].nBasements = inputValue;
        }
        //return buildingDataArrayResidential;
    } else  if (corporateIsShown) {
        var inputApartments = 0;
        var inputFloors = 0;
        var inputBasements = 0;
        if (inputId == "number_tenant_companies") {
            buildingDataArrayCorporate[0].inputId = inputId;
            buildingDataArrayCorporate[0].nSeparateTenantCompanies = inputValue;
            //buildingDataArrayHybrid[0].inputId = inputId;
            //buildingDataArrayHybrid[0].nSeparateTenantCompanies = inputValue;
        } else if (inputId == "number_floors") {
            inputFloors = inputValue;
            buildingDataArrayCorporate[1].inputId = inputId;
            buildingDataArrayCorporate[1].nFloors = inputValue;
        } else if (inputId == "number_basements") {
            inputBasements = inputValue;
            buildingDataArrayCorporate[2].inputId = inputId;
            buildingDataArrayCorporate[2].nBasements = inputValue;
        } else if (inputId == "number_parking_spaces") {
            buildingDataArrayCorporate[3].inputId = inputId;
            buildingDataArrayCorporate[3].nParkingSpaces = inputValue;
        } else if (inputId == "max_occupants_per_floor") {
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
        } else if (inputId == "number_floors") {
            inputFloors = inputValue;
            buildingDataArrayHybrid[1].inputId = inputId;
            buildingDataArrayHybrid[1].nFloors = inputValue;
        } else if (inputId == "number_basements") {
            inputBasements = inputValue;
            buildingDataArrayHybrid[2].inputId = inputId;
            buildingDataArrayHybrid[2].nBasements = inputValue;
        } else if (inputId == "number_parking_spaces") {
            buildingDataArrayHybrid[3].inputId = inputId;
            buildingDataArrayHybrid[3].nParkingSpaces = inputValue;
        } else if (inputId == "max_occupants_per_floor") {
            buildingDataArrayHybrid[4].inputId = inputId;
            buildingDataArrayHybrid[4].nOccupants = inputValue;
        } else if (inputId == "number_hours_activity") {
            buildingDataArrayHybrid[5].inputId = inputId;
            buildingDataArrayHybrid[5].nHoursActivity = inputValue;
        }
    //return buildingDataArrayCorporate;
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
        //buildingDataArrayResidential = giveQuote(inputId);
        giveQuote(inputId);
        var avgDoorsPerFloor = 0;
        var nElevatorShafts = 0;
        var nColumns = 0;
        var nColumnsToAdd = 0;
        var nOccupants = 0;
        var nElevators = 0;
        var nElevatorColumns = 0;
        var nElevatorsPerColumn = 0;
        var nElevatorsTotal = 0;


        if (residentialIsShown) {

            if (buildingDataArrayResidential[0].nApartments.length &&
                buildingDataArrayResidential[1].nFloors.length) {
                    //console.log("buildingDataArrayResidential = " + buildingDataArrayResidential[2].nBasements);
                    //avgDoorsPerFloor = buildingDataArrayResidential[0].nApartments / buildingDataArrayResidential[1].nFloors;
                    //console.log("avgDoorsPerFloor = " + avgDoorsPerFloor);
                    
                    avgDoorsPerFloor = buildingDataArrayResidential[0].nApartments / buildingDataArrayResidential[1].nFloors;
                    nElevatorShafts = Math.ceil(avgDoorsPerFloor / 6);
                    if (oldAvgDoorsPerFloor != avgDoorsPerFloor) {
                        console.log("avgDoorsPerFloor = " + avgDoorsPerFloor);
                        oldAvgDoorsPerFloor = avgDoorsPerFloor;
                    }

                    if (buildingDataArrayResidential[1].nFloors > 20) {
                        nElevatorShafts *= 2;
                        nColumnsToAdd = Math.ceil(buildingDataArrayResidential[1].nFloors / 20);
                        for (var i = 0; i < nColumnsToAdd; i++, nColumns++)
                            ;
                    } else if (buildingDataArrayResidential[1].nFloors <= 20) {
                        nColumns = 1;
                    }
                    console.log("nElevatorShafts = " + nElevatorShafts);
                    
                    console.log("nColums = " + nColumns);
            }
        } else if (corporateIsShown || hybridIsShown) {
/*
            if (buildingDataArrayCorporate[1].nFloors > 20) {
                nElevatorShafts *= 2;
                nColumnsToAdd = Math.ceil(buildingDataArrayResidential[1].nFloors / 20);
                for (var i = 0; i < nColumnsToAdd; i++) {
                    nColumns++;
                }
            } else if (buildingDataArrayCorporate[1].nFloors <= 20) {
                nColumns = 1;
            }
*/
            console.log("nElevatorShafts = " + nElevatorShafts);
            console.log("nColums = " + nColumns);
            //giveQuote(inputId);
            nOccupants = buildingDataArrayCorporate[4].nOccupants * (buildingDataArrayCorporate[1].nFloors + buildingDataArrayCorporate[2].nBasements);
            nElevators = nOccupants / 100;
            nElevatorColumns = Math.ceil((buildingDataArrayCorporate[1].nFloors + buildingDataArrayCorporate[2].nBasements) / 20);
            nElevatorsPerColumn = nElevators / nElevatorColumns;
            //nElevatorsTotal = nElevatorsPerColumn * nElevatorColumns;
            nElevatorsTotal = nElevatorsPerColumn * nElevatorColumns;
            if (hybridIsShown) {
                //if (buildingDataArrayHybrid[5].nHoursActivity > 24) {
                    //alert("Error");
                   // document.getElementById("max_occupants_per_floor").innerText = document.getElementById("max_occupants_per_floor").validate;
                //}
            }
            //console.log("nElevatorsTotal = " + nElevatorsTotal);
        }
        document.getElementById("result").value = nElevatorShafts;
        
/*
        if (residentialIsShown) {
            var inputApartments = 0;
            var inputFloors = 0;
            var inputBasements = 0;
            if (inputId == "number_apartments") {
                inputApartments = inputValue;
            } else if (inputId == "number_floors") {
                inputFloors = inputValue;
            } else if (inputId == "number_basements") {
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
  //let inputIdReferenceForRetrievingValues = [ "number_apartments", "number_floors", "number_basements", "number_apartments", "number_floors" ];
  let inputIdReferenceResidential = [ "number_apartments", "number_floors", "number_basements" ];
  let inputIdReferenceCommercial = [ "distinct_businesses", "number_floors", "number_basements", "number_parking_spaces", "number_elevator_cages" ];
  let inputIdReferenceCorporate = [ "number_tenant_companies", "number_floors", "number_basements", "number_parking_spaces", "max_occupants_per_floor" ];
  let inputIdReferenceHybrid = [ "distinct_businesses", "number_floors", "number_basements", "number_parking_spaces", "max_occupants_per_floor", "number_hours_activity" ];

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
        hybridIsShown = 1;
        let questionsHybrid = [ "Number of distinct businesses", "Number of floors", "Number of basements", "Number of parking spaces", "Maximum number of occupants per floor", "Number of hours of activity" ];
        for (var i = 0; i < questionsHybrid.length; i++) {
            //console.log("questionsCorporate[i]: " + questionsCorporate[i]);
            configure2(rowArray[i], questionsHybrid[i], secondDivArrayIds[i], inputIdReferenceHybrid[i]);
        }
        var inputTag = document.getElementById("number_hours_activity");
        inputTag.addEventListener('input', function() {
            console.log("inputTag: " + inputTag.value);
            if (inputTag.value > 24) {
                alert("Please choose a number smaller than 24");
            }
        });
    }
  }
}
// negative numbers
// verfication data