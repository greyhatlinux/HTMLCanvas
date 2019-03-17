console.log("canvas2.js is connected!");

var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


var c = canvas.getContext('2d');

var maxRadius = 40;
var minRadius = 3;

var mouse = {
    x: undefined,
    y: undefined
}


window.addEventListener('mousemove',
    function(event) {
       mouse.x = event.x;
       mouse.y = event.y;
       console.log(mouse);

})



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
//             //c.fillStyle = 'green';  // Change  this colour value for different coloured circles
//             //c.fillStyle = 'red';
//             // c.fillStyle = 'red';
//             c.fillStyle = "blue";
//             // c.fillStyle = 'rgba(100,200,150,0.3)';  //for grey like color
//             c.stroke();
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

//         if(mouse.x - this.x<50 && mouse.x - this.x >-50
//              && mouse.y - this.y < 50 && mouse.y - this.y >-50){
//                  if(this.radius < maxRadius)
//                  {
//                     this.radius += 2;
//                  }
                
//         }

//         else if(this.radius>minRadius)
//         {
//             this.radius -= 0.5;
//         }


    
//         this.draw();
//     }
// }

// var circleArray = [];


// for(var i=0;i<500;i++){

//     var x = Math.random()*(innerWidth - radius*2);
//     var y = Math.random()*(innerHeight - radius*2);
//     var radius = 10;
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

        if(mouse.x - this.x<50 && mouse.x - this.x >-50
             && mouse.y - this.y < 50 && mouse.y - this.y >-50){
                 if(this.radius < maxRadius)
                 {
                    this.radius += 2;
                 }
                
        }

        else if(this.radius>minRadius)
        {
            this.radius -= 0.5;
        }


    
        this.draw();
    }
}


var circleArray = [];


for(var i=0;i<1000;i++){

    var x = Math.random()*(innerWidth - radius*2);
    var y = Math.random()*(innerHeight - radius*2);
    var radius = Math.random()*25;
    var dx = (Math.random() - 0.5 )*5; 
    var dy = (Math.random() - 0.5 )*5;

    circleArray.push(new Circle(x,y,dx,dy,radius));
}

function animate(){
    requestAnimationFrame(animate);

    c.clearRect(0,0,innerWidth,innerHeight);

    for(var i=0; i<circleArray.length;i++){
        circleArray[i].update();
    }
    
}

animate();