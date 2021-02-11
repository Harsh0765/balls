class Ball {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2,
    };
    this.body = Bodies.rectangle(200, 300, 10, 10, options);
    World.add(world, this.body);
  }

  display() {}
}
