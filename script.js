console.log('it works');

// select the element on the page - canvas , shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shake = document.querySelector('.shake');
const MOVIE_AMOUNT = 50;
// setup our canvas for drawing
//destruction

const { width, height } = canvas;
// const width = canvas.width;    const { width } = canvas; 
// const height = canvas.height;  const { height } = canvas;

// create radom x and y between 0 and width / height

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVIE_AMOUNT;


let hue =  0;
ctx.strokeStyle = `hsl(${hue} , 100%, 50%)`;

// start the drawing

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();



// write a draw functions 
const draw = ({ key }) => {
    hue = hue + 10;
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    console.log(key);
    ctx.beginPath();
    ctx.moveTo(x, y);
    //change x and y

    switch (key) {
        case 'ArrowUp':
            y = y - MOVIE_AMOUNT;
            break;
        case 'ArrowDown':
            y = y + MOVIE_AMOUNT;
            break;
        case 'ArrowLeft':
            x = x - MOVIE_AMOUNT;
            break;
        case 'ArrowRight':
            x = x + MOVIE_AMOUNT;
            break;
        default:
            break;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
};

// const draw = (options) => {
//     console.log(options)
// }

// write a handler for the keys (swicth statement) 

const handleKey = e => {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
    }
}


// clear/ shake function 

const clearCanvas = () => {
    canvas. classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener(
        'animationend', 
        () => {
            canvas.classList.remove('shake');
        }, 
        { once: true }
    );
}
// listen for arrow keys

window.addEventListener('keydown', handleKey);
shake.addEventListener('click', clearCanvas);