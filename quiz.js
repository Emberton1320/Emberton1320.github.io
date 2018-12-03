//create a function algorithm to check answer

function Answers()
{
    var score = 0;
    var feedback = [];
    Q1Answer = document.quiz.a1.value.toLowerCase();
    if (Q1Answer === 'titan')
    {
        score++;
        feedback.push("Question 1 is corrrrect!!")
    } else {
        feedback.push("Wrong! Try again");
    }
    Q2Answer = document.quiz.a2.value.toLowerCase();
    if (Q2Answer === 'riven')
    {
        score++;
        feedback.push("Question 2 is correct!!")
    } else {
        feedback.push("Wrong! Try again");
    }



    if (document.quiz.a3.value === 'Khali')
    {
        score++;
        feedback.push("Question 3 is CORRRECT!!")
    }
    else
    {
        feedback.push("Incorrect!! Question 3 was Khali")
    }

    if (document.quiz.a4.value === 'Morgeth')
    {
        score++;
        feedback.push("Question 4 is CORRRECT!!")
    }
    else
    {
        feedback.push("Incorrect!! Question 4 was Morgeth")
    }





    if (document.quiz.a5A.checked === true && document.quiz.a5B.checked === false && document.quiz.a5C.checked === true && document.quiz.a5D.checked === true && document.quiz.a5E.checked === false)
    {
        score++;
        feedback.push(" Question 5 is Correct!! yooouuu are right!")
    }
    else
    {
        feedback.push("Incorrect!! Try again!")
    }

    if (document.quiz.a6A.checked === false && document.quiz.a6B.checked === true && document.quiz.a6C.checked === false && document.quiz.a6D.checked === false && document.quiz.a6E.checked === true)
    {
        score++;
        feedback.push(" Question 6 is Correct!! There you go!")
    }
    else
    {
        feedback.push("Incorrect!! Try again!")
    }




    alert(feedback);
    alert(score);
}