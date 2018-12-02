
function startQuiz() {
    timer()
    var catTrivia = [
        {
            question: "All cats are born with blue eyes.\n(a)True\n(b)False",
            answer: "a"
        },
        {
            question: "All cats are tabbies.\n(a)True\n(b)False",
            answer: "a"
        },
        {
            question: "What is a group of cats called?\n(a)Herd\n(b)Clowder\n(c)Cluster\n(d)Murder",
            answer: "b"
        }
    ];

    var points = 0;


    for (var i = 0; i < catTrivia.length; i++) {
        
        var choice = prompt(catTrivia[i].question);

        if (choice == catTrivia[i].answer) {
            points++;
        }

    }


    alert("Your score is" + " " + points + "/3.");

}

function timer() {
    var timeLeft = 10;
    var downloadTimer = setInterval(function () {
        --timeLeft
        console.log(timeLeft);
        document.getElementById("time").innerText = timeLeft;
        // console.log(document.getElementById("time"));
        if (timeLeft <= 0) {
            clearInterval(downloadTimer);
            alert("Times up!")
        }
    }, 1000);



}







   