var canvas = document.querySelector('canvas');
console.log("canvas1.js connected!");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


var c = canvas.getContext('2d');


// c.beginPath();
// // drawing arc
// c.arc(200,200,30,0,100,false);
// c.strokeStyle = 'red';
// c.stroke();


// function animate(){
//     requestAnimationFrame(animate);

//     var x = Math.random()*window.innerWidth;
//     var y = Math.random()*window.innerHeight;

//     c.beginPath();
//     c.arc(x,y,30,0,100,false);
//     c.strokeStyle = 'red';
//     c.stroke();

//     console.log(`printing circles!`)
    

// }

// animate();



 

// var x = 100;
// var y = 100;

// var radius = 30;
// var dx = 5; // for dx = -3 the circle will move toards left first with velocity 3px
// var dy = 5;
// function animate(){
//     requestAnimationFrame(animate);

//     //c.clearRect(0,0,innerWidth,innerHeight);
//     // go ahead and comment the above line to see the effect on the console
//     // you'll see lines which are not required (here)

//     c.beginPath();
//     c.arc(x,y,radius,Math.PI*2,false);
//     c.strokeStyle = 'green';
//     c.stroke();

//     if(x+radius>innerWidth || x-radius<0){
//         dx = -dx;
//     }

//     if(y+radius>innerHeight || y-radius<0){
//         dy = -dy;
//     }

//     x += dx;
//     y += dy;

// }

// animate();






// //for height and width of the till where the circles can traverse
// var x = Math.random()*innerWidth;
// var y = Math.random()*innerHeight;

// //for radius
// var radius = 30;

// //for speed along x and y axes
// var dx = (Math.random()-0.5)*5;  // for dx = -3 the circle will move toards left first with velocity 3px
// var dy = (Math.random()-0.5)*5;


// function animate(){
//     requestAnimationFrame(animate);

//     c.clearRect(0,0,innerWidth,innerHeight);
//     // go ahead and comment the above line to see the effect on the console
//     // you'll see lines which are not required (here)

//     c.beginPath();
//     c.arc(x,y,radius,Math.PI*2,false);
//     c.strokeStyle = 'green';
//     c.stroke();

//     if(x+radius>innerWidth || x-radius<0){
//         dx = -dx;
//     }

//     if(y+radius>innerHeight || y-radius<0){
//         dy = -dy;
//     }

//     x += dx;
//     y += dy;

// }

// animate();




// function Circle(x,y,dx,dy,radius){
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;

//     this.draw = function(){

            
//             c.beginPath();
//             c.arc(this.x,this.y,this.radius,Math.PI*2,false);
//             c.closePath();
//             c.fillStyle = 'green';  // Change  this colour value for different coloured circles
//             //c.fillStyle = 'red';
//             // c.fillStyle = 'red';
//             // c.fillStyle = "blue";
//             // c.fillStyle = 'rgba(100,200,150,0.3)';  //for grey like color
//             c.fill();

//     }

//     this.update = function(){
//         if(this.x+this.radius>innerWidth || this.x-this.radius<0){
//             this.dx = -this.dx;
//         }
    
//         if(this.y+this.radius>innerHeight || this.y-this.radius<0){
//             this.dy = -this.dy;
//         }
    
//         this.x += this.dx;
//         this.y += this.dy;
    
//         this.draw();
//     }
// }

// var circleArray = [];


// for(var i=0;i<500;i++){

//     var x = Math.random()*(innerWidth - radius*2);
//     var y = Math.random()*(innerHeight - radius*2);
//     var radius = 20;
//     var dx = (Math.random() - 0.5 )*5; 
//     var dy = (Math.random() - 0.5 )*5;

//     circleArray.push(new Circle(x,y,dx,dy,radius));
// }





// function animate(){
//     requestAnimationFrame(animate);

//     c.clearRect(0,0,innerWidth,innerHeight);

//     for(var i=0; i<circleArray.length;i++){
//         circleArray[i].update();
//     }
    
// }

// animate();





function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    var a = Math.random();

    this.draw = function(){

            
            c.beginPath();
            c.arc(this.x,this.y,this.radius,Math.PI*2,false);
            c.closePath();
            c.fillStyle = `rgba(${r},${g},${b},${a})`;
            c.fill();

    }

    this.update = function(){
        if(this.x+this.radius>innerWidth || this.x-this.radius<0){
            this.dx = -this.dx;
        }
    
        if(this.y+this.radius>innerHeight || this.y-this.radius<0){
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;
    
        this.draw();
    }
}

var circleArray = [];


for(var i=0;i<500;i++){

    var x = Math.random()*(innerWidth - radius*2);
    var y = Math.random()*(innerHeight - radius*2);
    var radius = Math.random()*25;
    var dx = (Math.random() - 0.5 )*5; 
    var dy = (Math.random() - 0.5 )*5;

    circleArray.push(new Circle(x,y,dx,dy,radius));  //this push function in js basically pushes a new item in the existing array,(here) it pushes a new circle 100 times
}





function animate(){
    requestAnimationFrame(animate);

    c.clearRect(0,0,innerWidth,innerHeight);

    for(var i=0; i<circleArray.length;i++){
        circleArray[i].update();
    }
    
}

animate();




