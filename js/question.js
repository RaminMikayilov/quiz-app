// function Question(questionText, answers, correctAnswer) {
//     this.questionText = questionText;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
// }

// Question.prototype.checkAnswer = function (answer) {
//     return answer === this.correctAnswer;
// }           


class Question {
    constructor(questionText, answers, correctAnswer) {
        this.questionText = questionText;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(answer){
        return answer === this.correctAnswer;
    }
}

let questions = [
    new Question("What is the capital of Azerbaijan?", {
        a: "Baku",
        b: "Sumgait",
        c: "Ganja"
    }, "a"),
    new Question("When is Triumph Day?", {
        a: "28 May",
        b: "18 October",
        c: "8 November"
    }, "c"),
    new Question("What is the National Dish of our country?", {
        a: "Plov",
        b: "Doner",
        c: "Sushi"
    }, "a"),
    new Question("The birthplace of crude oil : ", {
        a: "Saudi Arabia",
        b: "Azerbaijan",
        c: "USA"
    }, "b"),
    new Question("When was the Baku European Games?", {
        a: "in 2020",
        b: "in 2017",
        c: "in 2015"
    }, "c")
];