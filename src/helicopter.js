class Helicopter {
  constructor(ctx) {
    this.ctx = ctx
    this.tick = 0

    this.x = 100
    this.y = 50

    this.w = 100
    this.h = 40

    //this.x = 0
    //this.y = 0
    this.vx = 0
    this.vy = 0
    this.ay = 0
    this.ax = 0
    this.g = 0.05

    this.img = new Image()
    this.img.src = "https://2.bp.blogspot.com/-P6ZbLE-rnFM/WPTQh65UtMI/AAAAAAAABF8/9iYl-cIUEtIhj2JDTixyqZNeBn183AdmQCLcB/s1600/helicopter-spritesheet.png"
    this.img.frames = 4
    this.img.frameIndex = 0

    this.weapon = new Weapon(this)

  }

  draw() {
    // TODO: draw helicopter image
    // const frame = 1 * this.img / 4
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    this.ctx.drawImage(this.img, this.img.frameIndex * this.img.width, this.img.frameIndex * this.img.height / this.img.frames, this.img.width, this.img.height / this.img.frames, this.x, this.y, this.w, this.h)
    this.weapon.draw()
  }

  isFloor() {
    return this.y >= this.ctx.canvas.height - this.h
  }

  move() {
    // TODO: move
    this.vy += this.g
    if (this.y < 0){
      this.y = 0
    } else {
      this.y += this.vy
    }
    
    if (this.x > this.ctx.canvas.width - this.w ) {
      this.x = this.ctx.canvas.width - this.w
    } else {
      this.x += this.vx
    }
    if (this.x < 0) {
      this.x = 0
    } else {
      this.x += this.vx
    }
  }

  onKeyEvent(event) {
    
    if (event && event.type === "keydown") {
      
      switch (event.keyCode) {
        case UP:
          this.vy -= this.g + 0.7          
          break;
        case RIGHT:
          this.ax = 0
          this.ax += 1
          this.vx += 0.3
          this.vx += this.ax
          break;
          case LEFT:
            this.ax = 0
            this.ax -= 1
            this.vx -= 0.3
            this.vx -= this.ax
          break;
      }
    } else if (event && event.type === "keyup") {
      switch (event.keyCode) {
        case UP:
          this.vy -= this.g          
          break;
        case RIGHT:
          this.ax = 0
          this.ax += 1
          this.vx += 0.3
          this.vx += this.ax
          break;
          case LEFT:
            this.ax = 0
            this.ax -= 1
            this.vx -= 0.3
            this.vx -= this.ax
          break;
      }
    }
    // TODO w 87, s 83 a 65 d 68 m 77

  }

}
