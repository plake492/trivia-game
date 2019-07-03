let correct = 0;
let incorrect = 0;
let number = 10
let intervalId
const questions = [
    {q:"tim",a:'4'},
    {q:"What does creed do",a:'1'}
]
const questionsText = `
<p>${questions[0].q}</p>`
$('#inlineRadio1').appendChild(questionsText)


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    $("#countdown").html("<h2>" + number + "</h2>");
        if (number === 0) {
        stop();
        alert("Time Up!");
    }
    number--;   
}
  
function stop() {
    clearInterval(intervalId);

}

console.log(number)

run()

