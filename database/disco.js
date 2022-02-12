class DISCO {
  constructor() {
    this.w = 60;
    this.h = 40;

    this.x = width;
    this.y = height - this.h - 20;

    this.speed = 6;
    this.speed = 8;
  }

  motion() {
    this.x -= this.speed;
  }

  build() {
    push();    
      image(flameDisco, this.x, this.y, this.w, this.h);
      // noStroke();
      // fill(0);
      // rect(this.x, this.y, this.w, this.h);
    pop();  
  }
}