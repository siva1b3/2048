// Initialize state array with all false values
var innerSquareStates = new Array(16).fill(0);

function toggleInnerSquare(event) {
    var square = event.target;
    var innerSquare = square.querySelector('.inner-square');
    var squareIndex = square.getAttribute('data-index');
    
    // // Toggle state of inner square for this square
    // innerSquareStates[squareIndex] = !innerSquareStates[squareIndex];
    
    // Update display of inner square
    if (innerSquareStates[squareIndex] === 0) {
        innerSquare.classList.add('show');
        innerSquareStates[squareIndex] = 1;
    } else {
        innerSquare.classList.remove('show');
        innerSquareStates[squareIndex] = 0;
    }
}

function hideInnerSquare(event) {
    event.stopPropagation();
    var innerSquare = event.currentTarget;
    var square = innerSquare.parentNode;
    var squareIndex = square.getAttribute('data-index');
    
    // Hide inner square for this square
    innerSquareStates[squareIndex] = 0;
    innerSquare.classList.remove('show');
}


