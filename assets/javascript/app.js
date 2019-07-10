//===================== VARIABLES ======================//
let correct = 0;
let incorrect = 0;
let timer = 30;
let intervalId;

//===================== TIMER FUNCTIONS ======================//
                function run() {
                    clearInterval(intervalId);
                    intervalId = setInterval(decrement, 1000);
                }
                function decrement() {
                    $("#countdown").html("<h2>" + timer + "</h2>");
                        if (timer === 0) {
                        $('#getValue').toggle()
                        $('#q-section').toggle()
                        $('#endgame').html(`
                            <p>Times Up IDIOT!</p>
                            <video width="320" height="240" playsinline autoplay controls>
                                <source src="../trivia-game/assets/videos/idiot.mp4 " type="video/mp4" >
                            </video>
                            <div class="col-auto">
                                <button value="Refresh Page" id="restartGame" class="btn btn-primary mb-2" onClick="window.location.reload();">RELOAD</button>
                            </div>
                            `)
                        checkAnswers ()
                        stop();
                    }
                    timer--;   
                }
                function stop() {
                    clearInterval(intervalId);
                }
//===================== TIMER FUNCTIONS ======================//

run()

function checkAnswers() { 
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
  
    $('#log').append('<p> Correct: ' + correct + '</p>')
    $('#log').append('<p> Incorrect: ' + incorrect + '</p>')
    stop()
}

function restartButton (){
    $('section').append(`
        <div class="col-auto">
            <button value="Refresh Page" class="btn btn-primary mb-2" id="restartGame" onClick="window.location.reload();">RELOAD</button>
        </div>
    `)

    $('#getValue').toggle()
    if (correct < 3) {
        $('#log').append(`
        <p>You Are the Worst</p>
        <video width="320" height="240" autoplay controls>
            <source src="../trivia-game/assets/videos/NO.mp4 " type="video/mp4" >
        </video>`)
    } else { 
        $('#log').append(`
        <p>You Are the Best</p>
        <video width="320" height="240" autoplay controls>
            <source src="../trivia-game/assets/videos/Good.mp4 " type="video/mp4" >
        </video>`)

    }
}

// function restartGame(){
//     $('#getValue').toggle()
//     $('#q-section').toggle()
//     $('#endgame').toggle()
//     $('#log').toggle()
//     correct = 0;
//     incorrect = 0;
//     timer = 3
//     intervalId; 
    
//     run()
// }

// function restartGameSub(){
//     $('#getValue').toggle()
//     $('#endgame').hide()
//     $('#log').toggle()
//     correct = 0;
//     incorrect = 0;
//     timer = 3
//     intervalId; 
//     run()
// }

