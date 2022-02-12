let run;
let kick;
let groovy;
let flameDisco;
let discoBall = [];

let front;
let back;
let sky;

function preload() {
  run = loadImage('asset/SamuraiBunnyRun.gif');
  kick = loadImage('asset/SamuraiBunnyFly.png');
  groovy = loadImage('asset/GroovyGecko.gif');
  flameDisco = loadImage('asset/FlamingDiscoBall.gif');

  front = loadImage('asset/ArchitectureFront.png');
  back = loadImage('asset/ArchitectureBack.png');
  sky = loadImage('asset/Sky.png');
}

function setup() {
  createCanvas(1000, 450);

  discoBall.push(new DISCO());
  e = new ENVIRONMENT(width, height);
  samurai = new SAMURAI();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    samurai.flykick();
  }
}

function draw() {
  e.build();
  e.pan();
  e.groovy();
  e.back();
  e.front();

  discoBall[0].motion();
  if(random(1) < 0.01) {
    discoBall.push(new DISCO());
  } 

  discoBall.forEach((disco, i) => {
      if(typeof(discoBall[i - 1]) != "undefined") {
        if(discoBall[i - 1].x < width - 200) {
          disco.motion();
          disco.build();
        }

        if(samurai.collide(discoBall[i])) {
          console.log('END');
          // Try Again Screen
          noLoop();
          location.reload();
        }
      }
  });
  
  samurai.motion();
  samurai.build();
}