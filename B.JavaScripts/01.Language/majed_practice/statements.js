// let num = prompt("enter a number :")
// if (num > 0){
//     console.log("the number is positive")
// }
// else if ( num == 0){
//     console.log("number is zero")
// }
// else{
//     console.log("number is negative")
// }


function executeJavaScriptCode() {
    let grade = parseInt(prompt('enter your grade :'));
    let result;

    if (90 <= grade && grade <= 100) {
        result = "your grade is A";
    }
    else if (80 <= grade && grade <= 89) {
        result = "your grade is B";
    }
    else if (70 <= grade && grade <= 79) {
        result = "your grade is C";
    }
    else if (60 <= grade && grade <= 69) {
        result = "your grade is D";
    }
    else if ( grade <= 59) {
        result = "your grade is F";
    }
    else{
        result = "enter your valid grade"
    }

    document.getElementById("outputContainer").innerHTML = `
        <p>${result}</p>`;
}
