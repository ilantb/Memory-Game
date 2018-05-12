var MemoryGame = {};

MemoryGame.start = function () {

    //clear the board
    MemoryGame.clearBoard();
    // Generate the board (create the cards)
    // bind click on cards
    MemoryGame.generateBoard();

}

// Card data
const cardsArray = [{
    'name': 'wendy',
    'img': 'Images/wendy-testaburger.png',
},
{
    'name': 'butters',
    'img': 'Images/butters-stotch.png',
},
{
    'name': 'kyle',
    'img': 'Images/kyle-broflovski.png',
},
{
    'name': 'kenny',
    'img': 'Images/kenny-mccormick.png',
},
{
    'name': 'stan',
    'img': 'Images/stan-marsh.png',
},
{
    'name': 'eric',
    'img': 'Images/eric-cartman.png',
},
];

// Elements to add to the array if the user chooses the medium level
const cardsArrayMedium = [{
    'name': 'chef',
    'img': 'Images/chef.png',
},
{
    'name': 'garrison',
    'img': 'Images/school-faculty-mr-garrison-no-mr-hat.png',
},
{
    'name': 'mackey',
    'img': 'Images/mackey.png',
},
];

// Elements to add to the array if the user chooses the difficult level
const cardsArrayHard = [{
    'name': 'chef',
    'img': 'Images/chef.png',
},
{
    'name': 'garrison',
    'img': 'Images/school-faculty-mr-garrison-no-mr-hat.png',
},
{
    'name': 'mackey',
    'img': 'Images/mackey.png',
},
{
    'name': 'liane',
    'img': 'Images/liane-cartman.png',
},
{
    'name': 'gerald',
    'img': 'Images/gerald-broflovski.png',
},
{
    'name': 'randy',
    'img': 'Images/randy-marsh.png',
},
];


let firstGuess = '';
let secondGuess = '';
var count = 0;
var x;
var y;
var numberOfCards;
var counter;



MemoryGame.easy = function () {
    // Clear the board in case in case the user double clicks on the level selection
    MemoryGame.clearBoard();
    // Initialize the array so it would be in its starting value
    cardsArray.splice(6);
    // Call the function to start the game
    MemoryGame.generateBoard();
    // We will use this variable to check if the user won the game
    numberOfCards = cardsArray.length * 2;
}

MemoryGame.medium = function () {
    MemoryGame.clearBoard();
    cardsArray.splice(6);
    // Add these elements to the array so the game will be harder
    for (var i = 0; i < cardsArrayMedium.length; i++) {
        cardsArray.push(cardsArrayMedium[i]);
    }
    MemoryGame.generateBoard();
    numberOfCards = cardsArray.length * 2;


}


MemoryGame.hard = function () {
    MemoryGame.clearBoard();
    cardsArray.splice(6);
    for (var i = 0; i < cardsArrayHard.length; i++) {
        cardsArray.push(cardsArrayHard[i]);
    }
    MemoryGame.generateBoard();
    numberOfCards = cardsArray.length * 2;

}


MemoryGame.generateBoard = function () {
    // the counter variable helps us to count how many times we added check to the card class
    counter = 0;
    let gameGrid = cardsArray.concat(cardsArray);
    // Randomize the display of the cards
    gameGrid.sort(() => 0.5 - Math.random());

    const game = document.getElementById('board');
    const grid = document.createElement('section');
    grid.setAttribute('class', 'grid');
    board.appendChild(grid);


    gameGrid.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = item.name;
        card.innerHTML;
        card.addEventListener("click", MemoryGame.cardClick);
        // We create two sides for each card, front and back
        const front = document.createElement('div');
        front.classList.add('front');
        const back = document.createElement('div');
        back.classList.add('back');
        // We add here the background image to each card (on the hidden side)
        back.style.backgroundImage = `url(${item.img})`;
        grid.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    });

}


MemoryGame.cardClick = function () {

    if (count == 0) {
        count++;
        this.classList.add("flipped");
        // We save the name of the character that appears on the card we selected
        firstGuess = this.dataset.name;
        // We create the that variable in order to use it later
        x = this;

    }
    else if (count == 1) {
        this.classList.add("flipped");
        secondGuess = this.dataset.name;
        y = this;

        if (secondGuess == firstGuess) {

            // Here we have a match so we change the class name of the selected cards 
            setTimeout(function () {
                x.classList.add("match");
                y.classList.add("match");

            }, 800);

            setTimeout(function () {
                counter = counter + 2;

                // The user won the game so we invoque the function to display the modal
                if (counter === numberOfCards) {
                    myFunction();
                }
            }, 1200);


        }
        else {
            // We don't have a match so we remove flipped from the cards' class name
            setTimeout(function () {
                x.classList.remove("flipped");
                y.classList.remove("flipped");
            }, 800);
        }

        // Count goes back to 0 so we can check if the user has already clicked on a card in the next round
        count = 0;
        firstGuess = '';
        secondGuess = '';
    }

}

// We trigger a click on the button invoquing the modal
function myFunction() {
    document.getElementById("myCheck").click();
}


// We use this function to clear the board
MemoryGame.clearBoard = function () {
    document.getElementById("board").innerHTML = "";
}






$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})







