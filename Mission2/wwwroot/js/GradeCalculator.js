function addNumbers() {
    var pctAssignments = parseInt($("#pctAssignments").val());
    var pctGroupProject = parseInt($("#pctGroupProject").val());
    var pctQuizzes = parseInt($("#pctQuizzes").val());
    var pctExams = parseInt($("#pctExams").val());
    var pctIntex = parseInt($("#pctINTEX").val());
    // These set these values equal to the inputed values

    var total = (pctAssignments + pctGroupProject + pctQuizzes + pctExams + pctIntex);
    // This adds up all the percents to get the final percent and assigns it to the variable "total"
    let letter = "";
    // Making a letter variable to assign for the letter grade
    if (total < 60) {
        letter = "E"
    }
    else if (total < 64) {
        letter = "D-"
    }
    else if (total < 67) {
        letter = "D"
    }
    else if (total < 70) {
        letter = "D+"
    }
    else if (total < 74) {
        letter = "C-"
    }
    else if (total < 77) {
        letter = "C"
    }
    else if (total < 80) {
        letter = "C+"
    }
    else if (total < 84) {
        letter = "B-"
    }
    else if (total < 87) {
        letter = "B"
    }
    else if (total < 90) {
        letter = "B+"
    }
    else if (total < 94) {
        letter = "A-"
    }
    else if (total <= 100) {
        letter = "A"
    }
    else if (total > 100) {
        letter = "A+"
    }

    if ((pctAssignments >= 0 && pctAssignments <= 100) && (pctGroupProject >= 0 && pctGroupProject <= 100) && (pctQuizzes >= 0 && pctQuizzes <= 100) && (pctExams >= 0 && pctExams <= 100) && (pctIntex >= 0 && pctIntex <= 100)) {
        alert("Your final percentage is " + total + "% which means that you got a " + letter + " grade.")
    }
    // The above code goes through the grading scale based off of the syllabus and assigns the letter grade associated with that score.
    // The alert only executes if the entered grades are between 0 and 100
}

