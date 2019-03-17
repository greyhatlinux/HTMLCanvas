var canvas = document.querySelector('canvas');

console.log("canvas.js connected!");

//console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


// fillStyle taes 4 values fillStyle = rgba(r,g,b,alpha)
c.fillStyle='rgba(150,50,0,1.4)';


// fillRect takes 4 values fillRect(x,y,width,heigth)
c.fillRect(100,100,100,100);  //top left square

c.fillStyle='rgba(250,50,0,1.4)';
c.fillRect(500,100,100,100);  //top right square

c.fillStyle='rgba(210,90,0,1.0)';
c.fillRect(300,300,100,100);  //middle square

c.fillStyle='rgba(50,10,0,1.4)';
c.fillRect(100,500,100,100);  //botton left square

c.fillStyle='rgba(160,50,0,1.8)';
c.fillRect(500,500,100,100);  //botton right square


// console.log(canvas);

// drawing line
c.beginPath();

// moveTo and lineTo command takes 2 parameters moveTo(x.y)

// drawing line b/w top left and middle
c.moveTo(150,350);
c.lineTo(350,150);
c.stroke();

// drawing line b/w top right and middle
c.moveTo(350,150);
c.lineTo(550,350);
c.stroke();

// drawing line b/w bottom right and middle
c.moveTo(550,350);
c.lineTo(350,550);
c.stroke();

// drawing line b/w bottom left and middle
c.moveTo(350,550);
c.lineTo(150,350);
c.stroke();


// creating Arcs
c.beginPath();
c.arc(350,350,100,0,100,false);  //innermost circle
c.strokeStyle = 'green';
c.stroke();


// a loop for random placement of circles of equal parameters

for(var i = 0;i<100; i++){
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerHeight;

    c.beginPath();
    c.arc(x,y,30,0,100,false);
    c.strokeStyle = 'red';
    c.stroke();

}








