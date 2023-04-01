//goal: a circle is dragged over a diamond and into a green rectangle on the other side of the diamond
// only when dragging the circle over the diamond should the ability for the circle to enter the rectangle be possible
// once the circle is in the rectangle, the rectangle should change color, rotate in the xyz plane and say congrats

document.addEventListener("DOMContentLoaded", function () {

    let canvas = document.getElementById ("canvas");
    let ctx = canvas.getContext("2d");

    // let window_height = window.innerHeight;
    // let window_width = window.innerWidth;

    
    // canvas.height = window_height
    // canvas.width = window_width;

    canvas.style.background = "#bbf"

    const diamond ={
        x: canvas.width / 2 - 50,
        y: canvas.height / 2 - 50,
        width: 100,
        height: 100
    }
    const rectangle = {
        x: canvas.width / 2 + 100,
        y: canvas.height / 2 - 50,
        width: 100,
        height: 100,
        color: '#00ff00',
        rotated: false
    };

    let circle = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 20,
        isDragging: false
    };

    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    draw()

})