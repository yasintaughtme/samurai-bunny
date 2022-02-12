class ENVIRONMENT {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.offset = -20;

    this.wCity = 2000;
    this.hFront = 252;
    this.hBack = 282;

    this.xFront = 0;
    this.xVelFront = 2.8;
    this.xBack = 0;
    this.xVelBack = 0.7;

    this.gW = 187.5;
    this.gH = 425;
  }

  groovy() {
    image(groovy, width/1.5, height - this.gH, this.gW, this.gH);
  }

  pan() {
    if(this.xFront > - this.wCity/2) {
      this.xFront -= this.xVelFront;
    } else {
      this.xFront = 0;
      this.xFront -= this.xVelFront;
    }

    if(this.xBack > - this.wCity/2) {
      this.xBack -= this.xVelBack;
    } else {
      this.xBack = 0;
      this.xBack -= this.xVelBack;
    }
  }

  build() {
    push();
      image(sky, 0, 0, this.w, this.h);
    pop();
  }

  front() {
    image(front, this.xFront, height - this.hFront - this.offset, this.wCity, this.hFront);
  }

  back() {
    image(back, this.xBack, height - this.hBack - this.offset, this.wCity, this.hBack);
  }

  cursor() {
    noCursor();
    push();
      ellipseMode(CENTER);
      noFill();
      stroke('#B300FF');
      ellipse(mouseX, mouseY, 10, 10);
    pop();
    if(mouseIsPressed) {
    push();
      ellipseMode(CENTER);
      fill('#B300FF');
      stroke('#B300FF');
      ellipse(mouseX, mouseY, 10, 10);
    pop();
    }
  }
}