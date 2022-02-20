/*let select = document.querySelector('#weighted');
let dropdownVal= select.value;
select.addEventListener("change", function(){
    dropdownVal = select.value;
    if (dropdownVal === "yes") {
      document.querySelector("#weightedTable").style.visibility = "visible";
      //document.querySelector("#weightedAssignments").style.visibility = "visible";
      document.querySelector("#unweightedTable").style.visibility = "hidden";
      document.querySelector("#unweightedAssignments").style.visibility = "hidden";
      document.querySelector("#grade-goal").style.margin = "30px";
      document.querySelector("#weighted-btn").style.visibility = "visible";
    } 
    if (dropdownVal === "no") {
      document.querySelector("#unweightedTable").style.visibility = "visible";
      document.querySelector("#unweightedAssignments").style.visibility = "visible";
      document.querySelector("#weightedTable").style.visibility = "hidden";
      document.querySelector("#weightedAssignments").style.visibility = "hidden";
      document.querySelector("#grade-goal").style.margin = "0px";
      document.querySelector("#weighted-btn").style.visibility = "hidden";
      document.querySelector("#grade-goal").style.visibility = "visible";
      getCombinations();
    }
});*/

/*if (document.query("#numAssignmentsInput").value === "1") {
    document.querySelector("#getCombinations").style.visibility = "visible";
} else if (document.query("#numAssignmentsInput").value === "2") {
    document.querySelector("#getCombinations2").style.visibility = "visible";
    document.querySelector("#getCombinations").style.visibility = "hidden";
    document.querySelector("#getCombinations3").style.visibility = "hidden";
} else if (document.query("#numAssignmentsInput").value === "3") {
    document.querySelector("#getCombinations2").style.visibility = "hidden";
    document.querySelector("#getCombinations").style.visibility = "hidden";
    document.querySelector("#getCombinations3").style.visibility = "visible"; */
/*function fillInCategory(id, input) {
  let element = document.querySelector("id");
  element.value = input;
}
function enterCategories() {
  document.querySelector("#weightedAssignments").style.visibility = "visible";
  document.querySelector("#grade-goal").style.visibility = "visible";
  let category1 = document.querySelector("#category1");
  console.log(category1);
  let category2 = document.querySelector("#category2").value;
  if (category1 != null) {
    document.querySelector("category1Dropdown").value = category1;
  }
} */


function getCombinations() {
    let earnedUnweighted = parseInt(document.querySelector("#earnedUnweighted").value);
    let totalUnweighted = parseInt(document.querySelector("#totalUnweighted").value);
    let totalPoints1 = parseInt(document.querySelector("#unweightedPossiblePoints1").value);
    let totalPoints2 = parseInt(document.querySelector("#unweightedPossiblePoints2").value);
    let totalPoints3 = parseInt(document.querySelector("#unweightedPossiblePoints3").value);
    let goal = parseFloat(document.querySelector("#baselineInput").value);
    if (document.querySelector("#unweightedPossiblePoints2").value === '' && document.querySelector("#unweightedPossiblePoints3").value === '') {
      console.log("yay");
        totalUnweighted = totalUnweighted + totalPoints1;
        let neededTotal = (goal/100) * totalUnweighted;
        let neededPoints = neededTotal - earnedUnweighted;
        neededPoints = Math.round(neededPoints * 100) / 100
        if (neededPoints > totalPoints1) {
            document.querySelector("#result1").innerHTML = "Sorry, it is not possible to get your needed goal";
            document.querySelector("#result1").style.visibility = 'visible';
        } else if (neededPoints < totalPoints1 && neededPoints > 0) {
            document.querySelector("#result1").innerHTML =  "You need at least " + neededPoints + " points";
            document.querySelector("#result1").style.visibility = 'visible';
            console.log("You need " + neededPoints + " points");
        } else if (neededPoints <= 0) {
            document.querySelector("#result1").innerHTML =  "You can get a 0 on this assignment!";
            document.querySelector("#result1").style.visibility = 'visible';
        }
    } else if (document.querySelector("#unweightedPossiblePoints3").value === '') {
        totalUnweighted = totalUnweighted + totalPoints1 + totalPoints2;
        let neededTotal = (goal/100) * totalUnweighted;
        let neededPoints = neededTotal - earnedUnweighted;
        neededPoints = Math.round(neededPoints * 100) / 100
        console.log(neededPoints);
        if (neededPoints > totalPoints1 + totalPoints2) {
            document.querySelector("#result1").innerHTML = "Sorry, it is not possible to get your needed goal";
            document.querySelector("#result1").style.visibility = 'visible';
        } else if (neededPoints < totalPoints1 + totalPoints2 && neededPoints > 0) {
            document.querySelector("#result1").innerHTML =  "You need at least " + neededPoints + " points";
            document.querySelector("#result1").style.visibility = 'visible';
            console.log("You need " + neededPoints + " points");
        } else if (neededPoints <= 0) {
            document.querySelector("#result1").innerHTML =  "You can get a 0 on this assignment!";
            document.querySelector("#result1").style.visibility = 'visible';
        }
    } else {
        totalUnweighted = totalUnweighted + totalPoints1 + totalPoints2 + totalPoints3;
        let neededTotal = (goal/100) * totalUnweighted;
        let neededPoints = neededTotal - earnedUnweighted;
        neededPoints = Math.round(neededPoints * 100) / 100
        console.log(neededPoints);
        if (neededPoints > totalPoints1 + totalPoints2 + totalPoints3) {
            document.querySelector("#result1").innerHTML = "Sorry, it is not possible to get your needed goal";
            document.querySelector("#result1").style.visibility = 'visible';
        } else if (neededPoints < totalPoints1 + totalPoints2 + totalPoints3 && neededPoints > 0) {
            document.querySelector("#result1").innerHTML =  "You need at least " + neededPoints + " points";
            document.querySelector("#result1").style.visibility = 'visible';
            console.log("You need " + neededPoints + " points");
        } else if (neededPoints <= 0) {
            document.querySelector("#result1").innerHTML =  "You can get a 0 on this assignment!";
            document.querySelector("#result1").style.visibility = 'visible';
        }
    }
}

/*function getCombinations2() {
    let earnedUnweighted = parseInt(document.querySelector("#earnedUnweighted").value);
    let totalUnweighted = parseInt(document.querySelector("#totalUnweighted").value);
    let totalPoints1 = parseInt(document.querySelector("#unweightedPossiblePoints1").value);
    let totalPoints2 = parseInt(document.querySelector("#unweightedPossiblePoints2").value);
    let goal = parseFloat(document.querySelector("#baselineInput").value);
    totalUnweighted = totalUnweighted + totalPoints1 + totalPoints2;
    let neededTotal = (goal/100) * totalUnweighted;
    let neededPoints = neededTotal - earnedUnweighted;
    neededPoints = Math.round(neededPoints * 100) / 100
    if (neededPoints > totalPoints1 + totalPoints2) {
      document.querySelector("#result1").innerHTML = "Sorry, it is not possible to get your needed goal";
      document.querySelector("#result1").style.visibility = 'visible';
    } else if (neededPoints <= 0) {
      document.querySelector("#result1").innerHTML =  "You can get a 0 on this assignment!";
      document.querySelector("#result1").style.visibility = 'visible';
    } else if (neededPoints < totalPoints1 + totalPoints2 && neededPoints > 0) {
      document.querySelector("#result1").innerHTML =  "You need at least " + neededPoints + " points";
      document.querySelector("#result1").style.visibility = 'visible';
      console.log("You need " + neededPoints + " points");
    } 
}
function getCombinations3() {
    let earnedUnweighted = parseInt(document.querySelector("#earnedUnweighted").value);
    let totalUnweighted = parseInt(document.querySelector("#totalUnweighted").value);
    let totalPoints1 = parseInt(document.querySelector("#unweightedPossiblePoints1").value);
    let totalPoints2 = parseInt(document.querySelector("#unweightedPossiblePoints2").value);
    console.log(totalPoints2);
    let totalPoints3 = parseInt(document.querySelector("#unweightedPossiblePoints3").value);
    let goal = parseFloat(document.querySelector("#baselineInput").value);
    totalUnweighted = totalUnweighted + totalPoints1 + totalPoints2 + totalPoints3;
    let neededTotal = (goal/100) * totalUnweighted;
    let neededPoints = neededTotal - earnedUnweighted;
    neededPoints = Math.round(neededPoints * 100) / 100
    if (neededPoints > totalPoints1 + totalPoints2 + totalPoints3) {
      document.querySelector("#result1").innerHTML = "Sorry, it is not possible to get your needed goal";
      document.querySelector("#result1").style.visibility = 'visible';
    } else if (neededPoints <= 0) {
      document.querySelector("#result1").innerHTML =  "You can get a 0 on this assignment!";
      document.querySelector("#result1").style.visibility = 'visible';
    } else if (neededPoints < totalPoints1 + totalPoints2 + totalPoints3 && neededPoints > 0) {
      document.querySelector("#result1").innerHTML =  "You need at least " + neededPoints + " points";
      document.querySelector("#result1").style.visibility = 'visible';
      console.log("You need " + neededPoints + " points");
    } 
}*/
 

/*function alertIncomplete(){

}*/
