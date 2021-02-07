class Box2 {
  constructor(x, y, width, height) {
    var options = {
      'restitution': 0.4
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
   // console.log(this.body.speed);
    fill("orange");
    if (this.body.speed >= 3) {
      push();
      World.remove(world, this.body);
      this.Visiblty = this.Visiblty - 5;
      tint(255, this.Visiblity)
      pop();
    } else {
      rect(pos.x, pos.y, this.width, this.height);
    }
  }

  score() {
    if (this.Visiblity < 0 && this.Visiblity > -1000) {
      score++
    }
  }
};