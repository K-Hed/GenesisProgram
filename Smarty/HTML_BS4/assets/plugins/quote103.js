let residentialIsShown = 0;
let commercialIsShown = 0;
let corporateIsShown = 0;
let hybridIsShown = 0;
let verbose = 0;
var oldAvgDoorsPerFloor = -1;
var unitPriceElevatorShaftRadioButton = 0;
var installationFeesElevatorShaftRadio = 0;
var numberOfElevators = 0;
// let inputIdReferenceResidential = [ "number-of-apartments", "number-of-floors", "number-of-basements" ];
//  let inputIdReferenceCommercial = [ "distinct_businesses", "number-of-floors", "number-of-basements", "number-of-parking-spots", "number-of-elevators" ];
//  let inputIdReferenceCorporate = [ "number-of-corporations", "number-of-floors", "number-of-basements", "number-of-parking-spots", "maximum-occupancy" ];
//  let inputIdReferenceHybrid = [ "distinct_businesses", "number-of-floors", "number-of-basements", "number-of-parking-spots", "maximum-occupancy", "business-hours" ];

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


function retrieveValue(inputId) {
  return document.getElementById(inputId).value;
}

function giveQuote(inputId) {
  var inputValue = retrieveValue(inputId);
  if (residentialIsShown) {
    if (inputId == "number-of-apartments") {
      inputApartments = inputValue;
      buildingDataArrayResidential[0].inputId = inputId;
      buildingDataArrayResidential[0].nApartments = inputValue;
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
  } else if (commercialIsShown) {
    if (inputId == "number-of-elevators") {
      buildingDataArrayCommercial[4].inputId = inputId;
      buildingDataArrayCommercial[4].nElevatorCages = inputValue;
    } else {
      //buildingDataArrayCommercial[i].nElevatorCages = 0;
      buildingDataArrayCommercial[0].nFloors = 0;
      buildingDataArrayCommercial[1].nBasements = 0;
      buildingDataArrayCommercial[2].nParkingSpaces = 0;
      buildingDataArrayCommercial[3].nDistinctBusinesses = 0;
    }
    return buildingDataArrayCommercial;
  } else  if (corporateIsShown) {
    if (inputId == "number-of-corporations") {
      buildingDataArrayCorporate[0].inputId = inputId;
      buildingDataArrayCorporate[0].nSeparateTenantCompanies = inputValue;
    } else if (inputId == "number-of-floors") {
      buildingDataArrayCorporate[1].inputId = inputId;
      buildingDataArrayCorporate[1].nFloors = inputValue;
      console.log("buildingDataArrayCorporate[1].nFloors = " +
                  buildingDataArrayCorporate[1].nFloors);
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
    return buildingDataArrayCorporate;
  } else  if (hybridIsShown) {
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
      //console.log("MAX OCCUPANCY = " + inputValue);
    } else if (inputId == "business-hours") {
      buildingDataArrayHybrid[5].inputId = inputId;
      buildingDataArrayHybrid[5].nHoursActivity = inputValue;
    }
    return buildingDataArrayHybrid;
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
  var priceResidential = 0;
  var elevatorPrice = 0;

  if (buildingDataArrayResidential[0].nApartments.length &&
      buildingDataArrayResidential[1].nFloors.length) {

    avgDoorsPerFloor = buildingDataArrayResidential[0].nApartments /
                       buildingDataArrayResidential[1].nFloors;
    console.log("avgDoorsPerFloor = " + avgDoorsPerFloor);

    nElevatorsPerColumn = Math.ceil(avgDoorsPerFloor / 6);
    console.log("nElevatorsPerColumn = " + nElevatorsPerColumn);

    nElevatorColumns = Math.ceil(buildingDataArrayResidential[1].nFloors / 20);
    //console.log("nElevatorColumns = " + nElevatorColumns);

    var col = nElevatorColumns;

    while (col > 20) {
      col -= 20;
      //nElevators++;
      numberOfElevators++;
    }
    //nElevators = nElevatorColumns * nElevatorsPerColumn;
    numberOfElevators = nElevatorColumns * nElevatorsPerColumn;

    //console.log("nElevators = " + nElevators + nElevatorColumns);
    console.log("numberOfElevators = " + numberOfElevators);

    var allInputs = document.getElementsByTagName("input");
    for (var i = 0; i < allInputs.length; i++) {
      if (allInputs.item(i).id == "number_elevators") {
        //allInputs.item(i).value = nElevators;
        allInputs.item(i).value = numberOfElevators;
      } else if (allInputs.item(i).id == "number_columns") {
        allInputs.item(i).value = nElevatorColumns;
      } else if (allInputs.item(i).id == "number_elevator_per_column") {
        allInputs.item(i).value = nElevatorsPerColumn;
      }
    }
  }
}

function calculateCommercial(buildingDataArrayCommercial, inputId) {
    unitPriceElevatorShaftRadioButton = 0;
    installationFeesElevatorShaftRadio = 0;
    
  var inputValue = retrieveValue(inputId);

  console.log("inputValue = " + inputValue);
  var allInputs = document.getElementsByTagName("input");
  console.log("commercial = " + buildingDataArrayCommercial[4].nElevatorCages);
  for (var i = 0; i < allInputs.length; i++) {
    if (allInputs.item(i).id == "number_elevators") {
      allInputs.item(i).value = buildingDataArrayCommercial[4].nElevatorCages || 0;
    }
  }
  buildingDataArrayCommercial[0].nDistinctBusinesses = 0;
  buildingDataArrayCommercial[1].nFloors = 0;
  buildingDataArrayCommercial[2].nBasements = 0;
  buildingDataArrayCommercial[3].nParkingSpaces = 0;
  numberOfElevators = parseFloat(buildingDataArrayCommercial[4].nElevatorCages);
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
      //giveQuote(inputId);
      var nOccupants = 0;
      var nElevators = 0;
      var nElevatorColumns = 0;
      var nElevatorsPerColumn = 0;
      var nElevatorsTotal = 0;


      if (residentialIsShown) {
        buildingDataArrayResidential = giveQuote(inputId);
        calculateResidential(buildingDataArrayResidential, inputId);
      } else if (corporateIsShown) {
        unitPriceElevatorShaftRadioButton = 0;
        installationFeesElevatorShaftRadio = 0;
        numberOfElevators = 0;
/*
        buildingDataArrayCorporate = giveQuote(inputId);
        console.log("buildingDataArrayHybrid floors = " + buildingDataArrayCorporate[1].nFloors);
        if (buildingDataArrayCorporate[1].nFloors > 20) {
          //nElevatorShafts *= 2;
          var addToNColumns = 0;
          addToNColumns = Math.ceil(buildingDataArrayCorporate[1].nFloors / 20);
          for (var i = 0; i < addToNColumns; i++) {
            nColumns++;
          }
        } else if (buildingDataArrayCorporate[1].nFloors <= 20) {
          nColumns = 1;
        }
        nOccupants = buildingDataArrayCorporate[4].nOccupants * (buildingDataArrayCorporate[1].nFloors + buildingDataArrayCorporate[2].nBasements);
        console.log("nElevators = " + nElevators);
        //nElevators = nOccupants / 100;
        //numberOfElevators = nOccupants / 100;
        nElevators = nOccupants / 100;
        console.log("buildingDataArrayCorporate[1].nFloors = " + buildingDataArrayCorporate[1].nFloors);
        console.log("buildingDataArrayCorporate[2].nBasements = " + buildingDataArrayCorporate[2].nBasements);
        nElevatorColumns = Math.ceil((buildingDataArrayCorporate[1].nFloors + buildingDataArrayCorporate[2].nBasements) / 20);
        console.log("nElevatorColumns = " + nElevatorColumns);
        nElevatorsPerColumn = nElevators / nElevatorColumns;
        console.log("nElevatorsPerColumn = " + nElevatorsPerColumn);
        //nElevatorsTotal = nElevatorsPerColumn * nElevatorColumns;
        nElevatorsTotal = nElevatorsPerColumn * nElevatorColumns;
        numberOfElevators = nElevatorsTotal;
        console.log("nElevators = " + nElevators);
        console.log("nElevatorsTotal = " + nElevatorsTotal);
        //document.getElementById("result").value = Math.ceil(nElevatorsTotal / 100);
        //document.getElementById("number_elevators").value = Math.ceil(nElevatorsTotal / 100);
        numberOfElevators /= 100;
        document.getElementById("number_elevators").value = Math.ceil(numberOfElevators);
        //giveQuote(inputId);
*/


        buildingDataArrayCorporate = giveQuote(inputId);


        console.log("buildingDataArrayHybrid[1].nFloors = " + buildingDataArrayCorporate[1].nFloors);
        console.log("buildingDataArrayHybrid[2].nBasements = " + buildingDataArrayCorporate[2].nBasements);

        // Number of columns = Number of floors divided by 20
        nElevatorColumns = Math.ceil(buildingDataArrayCorporate[1].nFloors / 20);
        console.log("elevator columns = " + nElevatorColumns);

        // stories = Number of floors + number of basements

        var stories = parseInt(parseInt(buildingDataArrayCorporate[1].nFloors) + parseInt(buildingDataArrayCorporate[2].nBasements));
        console.log("stories = " + stories);

        // Number of occupants = Number max occupants * 
        nOccupants = buildingDataArrayCorporate[4].nOccupants * stories;
        console.log("nOccupants = " + nOccupants);
        //nElevators = nOccupants / 100;
        //numberOfElevators = nOccupants / 100;
        //nElevators = nOccupants / 100;

        // Number of elevators = number of occupants / 1000;
        nElevators = nOccupants / 1000;

        // Number of Elevator columns = stories / 20;
        nElevatorColumns = Math.ceil((stories) / 20);
        console.log("nElevatorColumns = " + nElevatorColumns);

        // Number of elevators per column = number of elevators / number of elevator column
        nElevatorsPerColumn = Math.ceil(nElevators / nElevatorColumns);
        console.log("nElevatorsPerColumn = " + nElevatorsPerColumn);

        //nElevatorsTotal = nElevatorsPerColumn * nElevatorColumns;

        // Number of total elevators = Number of elevators per column * number of elevator columns
        nElevatorsTotal = nElevatorsPerColumn * nElevatorColumns;
        //numberOfElevators = nElevatorsTotal;
        console.log("nElevators = " + nElevators);
        console.log("nElevatorsTotal = " + nElevatorsTotal);
        //console.log("typedef numberOfElevators = " + typeof numberOfElevators);
        //document.getElementById("number_elevators").value = numberOfElevators;
        numberOfElevators = nElevatorsTotal;
        document.getElementById("number_elevators").value = nElevatorsTotal;
      } else if (hybridIsShown) {
        buildingDataArrayHybrid = giveQuote(inputId);


        console.log("buildingDataArrayHybrid[1].nFloors = " + buildingDataArrayHybrid[1].nFloors);
        console.log("buildingDataArrayHybrid[2].nBasements = " + buildingDataArrayHybrid[2].nBasements);

        // Number of columns = Number of floors divided by 20
        nElevatorColumns = Math.ceil(buildingDataArrayHybrid[1].nFloors / 20);
        console.log("elevator columns = " + nElevatorColumns);

        // stories = Number of floors + number of basements

        var stories = parseInt(parseInt(buildingDataArrayHybrid[1].nFloors) + parseInt(buildingDataArrayHybrid[2].nBasements));
        console.log("stories = " + stories);

        // Number of occupants = Number max occupants * 
        nOccupants = buildingDataArrayHybrid[4].nOccupants * stories;
        console.log("nOccupants = " + nOccupants);
        //nElevators = nOccupants / 100;
        //numberOfElevators = nOccupants / 100;
        //nElevators = nOccupants / 100;

        // Number of elevators = number of occupants / 1000;
        nElevators = nOccupants / 1000;
      
        // Number of Elevator columns = stories / 20;
        nElevatorColumns = Math.ceil((stories) / 20);
        console.log("nElevatorColumns = " + nElevatorColumns);

        // Number of elevators per column = number of elevators / number of elevator column
        nElevatorsPerColumn = Math.ceil(nElevators / nElevatorColumns);
        console.log("nElevatorsPerColumn = " + nElevatorsPerColumn);

        //nElevatorsTotal = nElevatorsPerColumn * nElevatorColumns;

        // Number of total elevators = Number of elevators per column * number of elevator columns
        nElevatorsTotal = nElevatorsPerColumn * nElevatorColumns;
        //numberOfElevators = nElevatorsTotal;
        console.log("nElevators = " + nElevators);
        console.log("nElevatorsTotal = " + nElevatorsTotal);
        //console.log("typedef numberOfElevators = " + typeof numberOfElevators);
        //document.getElementById("number_elevators").value = numberOfElevators;
        numberOfElevators = nElevatorsTotal;
        document.getElementById("number_elevators").value = nElevatorsTotal;


      } else if (commercialIsShown) {
        buildingDataArrayCommercial = giveQuote(inputId);
        calculateCommercial(buildingDataArrayCommercial, inputId);
      }


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

  unitPriceElevatorShaftRadioButton = 0;
  installationFeesElevatorShaftRadio = 0;
  numberOfElevators = 0;
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
    uncheckRadioButtons();
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
    uncheckRadioButtons();
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
    uncheckRadioButtons();
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
    uncheckRadioButtons();
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

function commafy(num) {
  var str = num.toString().split('.');
  if (str[0] && str[0].length == 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  } else {
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
  }
  return str.join('.');
}

function uncheckRadioButtons() {
  var elements = document.getElementsByTagName("input");

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].type == "radio") {
      elements[i].checked = false;
    }
  }
}

function getRadioButtons() {
  //var value_radio = document.getElementById("radio-input-shaft");
  //console.log("value_radio = " + value_radio.value);
  var allInputs = document.getElementsByTagName("input");
  var radioButtonValue = "";
  if (!isNaN(buildingDataArrayResidential[0].nApartments) ||
    !isNaN(buildingDataArrayCommercial[4].nElevatorCages) ||
    !isNaN(buildingDataArrayCorporate[1].nFloors) ||
    !isNaN(buildingDataArrayHybrid[1].nFloors)) {
    for (var i = 0; i < allInputs.length; i++) {
      if (allInputs.item(i).name == "radio-btn") {
        if (allInputs.item(i).checked) {
          radioButtonValue = allInputs.item(i).value;
          if (radioButtonValue == "STANDARD") {
            unitPriceElevatorShaftRadioButton = 7565;
            installationFeesElevatorShaftRadio = 0.10;
          } else if (radioButtonValue == "PREMIUM") {
            unitPriceElevatorShaftRadioButton = 12345;
            installationFeesElevatorShaftRadio = 0.13;
          } else if (radioButtonValue == "EXCELIUM") {
            unitPriceElevatorShaftRadioButton = 15400;
            installationFeesElevatorShaftRadio = 0.16;
          }
          /* if (verbose) { */ console.log("value = " + allInputs.item(i).value); /* } */
            //console.log("price = " + allInputs.item(i).data-price);
          break;
        }
      }
    }

  }

  // Create our number formatter.
  var formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAN',
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 2,
    // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  var priceResidential = 0;
  var priceResidentialStr = "";
  var elevatorPrice = 0;
  var elevatorPriceStr = "";
  var installationFees = 0;
  var installationFeesStr = "";
  var finalPrice = 0;
  var finalPriceStr = "";

  var unitPrice = parseInt(unitPriceElevatorShaftRadioButton);
  var fees = parseFloat(installationFeesElevatorShaftRadio);
  console.log("unitPrice = " + unitPrice);
  console.log("fees = " + fees);

  var secondInstallationFees = 0;
  var secondInstallationFeesStr = "";

  console.log("unitPriceElevatorShaftRadioButton = " + unitPriceElevatorShaftRadioButton);
  if (unitPrice != 0) { //  && fees != 0
    installationFees = unitPrice * fees;
    //var standard = unitPrice * numberOfElevators;
    //var standardPourcent = (standard / 100);
    //var standardFees = standardPourcent * unitPrice;

    //installationFeesStr = formatter.format(installationFees).toString();
    //installationFeesStr = commafy(installationFeesStr.replace(/[^0-9\.-]+/g, ""));

    console.log("unitPrice = " + unitPrice);
    console.log("installationFees = " + installationFees);

    priceResidential = parseFloat(unitPrice + installationFees);
    priceResidentialStr = formatter.format(priceResidential).toString();
    priceResidentialStr = commafy(priceResidentialStr.replace(/[^0-9\.-]+/g, ""));

    console.log("priceResidential = " + priceResidential);

    elevatorPrice = parseFloat(unitPrice * parseFloat(numberOfElevators));
    elevatorPriceStr = formatter.format(elevatorPrice).toString();
    elevatorPriceStr = commafy(elevatorPriceStr.replace(/[^0-9\.-]+/g, ""));

    console.log("elevatorPrice = " + elevatorPrice);

    //installationFees = 0;
    //installationFees = parseFloat(elevatorPrice) * unitPrice;
    //installationFeesStr = formatter.format(installationFees).toString();
    //installationFeesStr = commafy(installationFeesStr.replace(/[^0-9\.-]+/g, ""));

    secondInstallationFees = parseFloat(elevatorPrice * fees);
    secondInstallationFeesStr = formatter.format(secondInstallationFees).toString();
    secondInstallationFeesStr = commafy(secondInstallationFeesStr.replace(/[^0-9\.-]+/g, ""));

    console.log("secondInstallationFees = " + secondInstallationFees);

    finalPrice = elevatorPrice + secondInstallationFees;
    console.log("finalPrice = " + finalPrice);
    finalPriceStr = formatter.format(finalPrice).toString();
    finalPriceStr = commafy(finalPriceStr.replace(/[^0-9\.-]+/g, ""));
    document.getElementById("elevator_unit").value = priceResidentialStr + ' $';
    document.getElementById("elevator_total_price").value = elevatorPriceStr + ' $';
    //document.getElementById("installation_fees_total").value = installationFeesStr + ' $';
    document.getElementById("installation_fees_total").value = secondInstallationFeesStr + ' $';
    document.getElementById("final_elevator_price").value = finalPriceStr + ' $';
  }
}

function clearInputs() {
  var inputValues = document.getElementsByTagName("input");
  console.log("CLEAR INPUT NUMBRE VALUES = " + inputValues.length);
  for (var i = 0; i < inputValues.length; i++) {
    if (inputValues.item(i).id == "elevator_unit") {
      inputValues.item(i).value = "";
    } else if (inputValues.item(i).id == "elevator_total_price") {
      inputValues.item(i).value = "";
      inputValues.item(i).innerText = "";
    } else if (inputValues.item(i).id == "installation_fees_total") {
      inputValues.item(i).value = "";
    } else if (inputValues.item(i).id == "elevator_total_price") {
      inputValues.item(i).value = "";
    } else if (inputValues.item(i).id == "final_elevator_price") {
      inputValues.item(i).value = "";
    } else if (inputValues.item(i).id == "number_elevators") {
      inputValues.item(i).value = "";
    }
  }
}
// negative numbers
// verfication data