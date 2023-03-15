/* Opgave 1*/

let myBall = document.getElementById('ballOne');
let myBuhButton = document.getElementById('buhOneButton');
console.log(myBuhButton);

myBuhButton.addEventListener('click', () => {
    myBall.classList.toggle('animateRight')
});



/*opgave 2*/

let myBalls = document.getElementsByClassName('balls');
let myBuhTwoButton = document.getElementById('buhTwoButton');

myBuhTwoButton.addEventListener('click', () => {

    for (const myBall of myBalls) {
        myBall.classList.toggle('animateRight')
    };

});

/*opgave 3*/

let myHardBalls = document.getElementsByClassName('hardBalls');
let myBuhThreeButton = document.getElementById('buhThreeButton');

console.log(myBuhThreeButton);

myBuhThreeButton.addEventListener('click', () => {

    let myDirection = "Right";

    for (const myBall of myHardBalls) {

        if (myDirection == "Right") {

            myBall.classList.toggle('animateRight');
            myDirection = "Left";

        }

        else if(myDirection == "Left"){

            myBall.classList.toggle('animateLeft');
            myDirection = "Up";

        }

        else if(myDirection == "Down") {

            myBall.classList.toggle('animateDown');
            myDirection = "Down";

        }

        else if(myDirection == "Up"){

            myBall.classList.toggle('animateUp');
            myDirection = "Right";

        }




    };




});
console.log(myBuhThreeButton);


