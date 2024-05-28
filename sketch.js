let img
let cnv
let button
let output
let cx,cy


function setup() {
cnv =createCanvas(800, 30);
cnv.parent("colorbox")
 //cx = floor((windowWidth - cnv.width) / 2);
  // cy = floor((windowHeight - cnv.height) / 2);
 // cnv.position(cx, cy);
  getStreet()
  background(128)
  textSize(30);
  textWrap(WORD);

  // Display the text.
  text('Wait for image',0, 0, 800);
  button = createButton("Click for new image, (change of color shows you have clicked)")
  button.parent("buttonholder")
  button.mousePressed(doit)
  button.size(300,300)
  
  //button.position(cx,cy+cnv.height+30)
  button.style('font-size', '30px');
  //output.position(button.x,button.y+60)
}

 async function doit(){
    background(random(255),random(255),random(255))
    await getStreet()
   

 }

async function getStreet(){
  /* 
  if (img) {
    img.remove();
    //uncomment to delete old image;
  }
   */
  img = await createImg("https://image.pollinations.ai/prompt/a%20robot%20in%20a%20hotel%20room%20with%20blue%20walls%20with%20a%20large%20window%20and%20a%20bed,%20the%20man%20is%20painting%20and%20making%20a%20sculpture?width=800&height=800&nologo=true&seed="+floor(random(1026)),"street scene")
 //img.position(cx,cy)
 img.parent("sketch-holder")
 
 //cnv.image(img,0,0)
   
}