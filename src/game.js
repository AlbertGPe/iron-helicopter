class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.tick = 0

    this.bg = new Background(ctx)
    this.helicopter = new Helicopter(ctx)
    this.obstacles = []
  }
  /*reparticion del trabajo:
  -Leando : todo
  -los demas: apoyamos */
  start() {
    // TODO: loop. clear, draw, move, addObstacle, checkCollisions, clearObstacles
    this.intervalId = setInterval(() => {
      this.clear()
      this.draw()
      this.checkCollisions()
      this.move()
      this.addObstacle() 
      this.clearObstacles();
      this.onKeyEvent()

      if(this.helicopter.isFloor()){
        this.helicopter.y = this.ctx.canvas.height - this.helicopter.h
        this.helicopter.img.src = "src/img/fire.png"
        this.clear()
        this.draw()
        this.gameOver()
        
      }
      
  }, 1000 / 60)

  }

  clearObstacles() {
    // TODO: filter only visible obstacles (call o.isVisible())
    this.obstacles = this.obstacles.filter(o => o.isVisible())
  }

  addObstacle() {
    // TODO: add new Obstacle every 100 ticks
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  draw() {
    this.bg.draw()
    this.helicopter.draw()
    //this.obstacles.forEach(o => o.draw())*/
  }

  move() {
    this.bg.move()
    this.helicopter.move()
  }

  checkCollisions() {
    // TODO: check helicopter on floor?
    // TODO: iterate obstacles. check colX and colY
  }

  onKeyEvent(event) {
    this.helicopter.onKeyEvent(event)
  }

  gameOver() {
    clearInterval(this.intervalId)

    this.ctx.font = "40px Comic Sans MS";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
  }
}