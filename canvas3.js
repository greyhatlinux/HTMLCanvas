console.log("canvas3.js is connected!");

var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


var c = canvas.getContext('2d');

// //c.fillStyle = 'red';
// c.fillStyle = 'rgba(100,82,62,1)';
// c.fillRect(100,100,100,100);

var rectArray = [];
var dx = 0;
var dy = 0;


for(var i=0;i<innerWidth;i++){
    var x = Math.floor( Math.random()*innerHeight);
    var y = Math.floor( Math.random()*innerHeight);
    dy += Math.random()*10;

    rectArray.push(new Rect(this.x,this.y,this.dx,this.dy));
    // console.log("inside for!");





}



function Rect(x,y,dx,dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

    this.draw = function(){

        c.fillStyle = 'blue';
        c.fillRect(this.x,this.y,this.dx,this.dys);
        

    }

    this.update = function(){

        this.x += dx;
        this.y += dy;

        this.draw();

    }

    
}



function animate(){
    requestAnimationFrame(animate);

    c.clearRect(0,0,innerWidth,innerHeight);


    for(var i=0;i<rectArray.length;i++){
        rectArray[i].update();
        // console.log("hey!");

    }
}
animate();







// var rectArray = [];


// //var x = 100;
// var y = 0;
// dx = 1;
// dy = 1;



// function Rect(x,y){
//     this.x = x;
//     this.y = y;
    
//     this.draw = function(){

//         c.fillStyle = 'pink';
//         c.fillRect(this.x,this.y,10,10);
//         console.log("inside Rect obj!");
//     }

//     this.update = function(){
//         //this.x += dx;
//         this.y += dy;
//     }

//     this.draw();

    
// }

// for(var i=0;i<innerWidth;i+=10){
//     rectArray.push(new Rect(10,10))
//     // console.log(rectArray[i]);
    
// }

// function animate(){

//     requestAnimationFrame(animate);

//     c.clearRect(0,0,innerWidth,innerWidth);

//     for(var i=0;i<rectArray.length;i++){
//         rectArray[i].update();
//         // console.log("inside animate!");
//     }

// }

// //animate();
// Rect(10,10);
