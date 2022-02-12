class SAMURAI {
  constructor() {
    this.pos = createVector(width/4, height);
    this.yVel = 0;

    this.gravity = 1.8;

    this.w = 100
    this.h = 117;
  }

  flykick() {
    if(this.pos.y == height - (this.h)) {
      this.yVel = -20;
    }
  }

  collide(disco) {
    // noFill();
    // stroke(255);
    // rect(disco.x, disco.y, disco.w/1.5, disco.h/1.5);

    return collideRectRect(this.pos.x, this.pos.y, this.w/1.5, this.h/1.25, disco.x, disco.y, disco.w/1.5, disco.h/1.5);
  }

  motion() {
    this.yVel += this.gravity;
    this.pos.y += this.yVel;
    this.pos.y = constrain(this.pos.y, 0, height - this.h);
  }

  build() {
    push();
      let sprite;
      if(this.pos.y < height - this.h) {
        sprite = kick;
      } else {
        sprite = run;
      }
        image(sprite, this.pos.x, this.pos.y, this.w, this.h);
    pop();
  }
}