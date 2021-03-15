canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
ca1_width=100;
car1_height=90;
car1_x=100;
car1_y=200;
background_image="Jangl.jpg";
car_image="download.png";
function add() {
background_imgTag=new Image(); 
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_image;
car1_imgTag=new Image(); 
car1_imgTag.onload=uploadcar;
car1_imgTag.src=car_image;

}
function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {
	ctx.drawImage(car1_imgTag,car1_x, car1_y, car1_width, car1_height);
}

