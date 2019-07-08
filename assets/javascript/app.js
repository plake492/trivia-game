//===================== VARIABLES ======================//
let correct = 0;
let incorrect = 0;
let timer = 10000
let intervalId;
// const questions = [
//     {q:"tim",a:'4'},
//     {q:"What does creed do",a:'1'}
// ]
// const questionsText = `
// <p>${questions[0].q}</p>`
// $('#question1').html(questionsText)


//===================== TIMER FUNCTIONS ======================//
                function run() {
                    clearInterval(intervalId);
                    intervalId = setInterval(decrement, 1000);
                }
                function decrement() {
                    $("#countdown").html("<h2>" + timer + "</h2>");
                        if (timer === 0) {
                        stop();
                        alert("Time Up!");
                    }
                    timer--;   
                }
                function stop() {
                    clearInterval(intervalId);
                }
//===================== TIMER FUNCTIONS ======================//

run()

function submitAnswers() { 
    // var button = document.getElementsByName("question1"); 
    let answer1 = $("input[type='radio'][name='question1']:checked").val()
    let answer2 = $("input[type='radio'][name='question2']:checked").val()
    let answer3 = $("input[type='radio'][name='question3']:checked").val()
    let answer4 = $("input[type='radio'][name='question4']:checked").val()
    let answer5 = $("input[type='radio'][name='question5']:checked").val()

    
    if (answer1 === "right") {
            correct++
        } else {
            incorrect++
        } 
    if (answer2 === "right") {
            correct++
        } else {
            incorrect++
        }

    if (answer3 === "right") {
            correct++
        } else {
            incorrect++
        }
    if (answer4 === "right") {
            correct++
        } else {
            incorrect++
        }
    if (answer5 === "right") {
            correct++
        } else {
            incorrect++
        }
   
    console.log(answer1)
    console.log(answer2)
    console.log(answer3)
    console.log(answer4)
    console.log(answer5)
    console.log("CORRECT " + correct)
    console.log("WRONG " + incorrect)
  
    $('#log').append('<p> Correct: ' + correct + '</p>')
    $('#log').append('<p> Incorrect: ' + incorrect + '</p>')

}